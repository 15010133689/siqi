import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import {cookies} from "next/headers";

const login = async (credentials) => {
    try {
        const formData = new FormData()
        formData.append('username',credentials.username)
        formData.append('password',credentials.password)
        const loginResult = await fetch(process.env.NEXT_PUBLIC_GATEWAY_URL+'/auth-service/auth/login',{
            method:'POST',
            credentials:'include',
            body:formData
        })
        loginResult.headers.forEach(header =>{
            if (header.startsWith("ELLIOT_TOKEN")){
                cookies().set('ELLIOT_TOKEN',header.split('=')[1]);
            }
        })
        let user = null
        if (loginResult.ok){
            user = await verifyLogin()
        }

        if (!user) throw new Error("Wrong credentials!");
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to login!");
    }
};
const verifyLogin = async () =>{
    debugger
    const elliot_token=cookies().get('ELLIOT_TOKEN');
    const verifyResult = await fetch(process.env.NEXT_PUBLIC_GATEWAY_URL + '/auth-service/auth/verify',{
        method:'GET',
        headers: {
            Cookie:'ELLIOT_TOKEN='+elliot_token.value,
        },
        credentials:'include'
    })
    if (verifyResult.ok){
        let user = await verifyResult.json()
        user.elliot_token = elliot_token.value
        return user
    }
    return null
}
export const config = {
    trustHost: true,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = {};
                    // const user = await login(credentials);
                    return user;
                } catch (err) {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        authorized({ request, auth }) {
            const { pathname } = request.nextUrl
            const isLoggedIn = !!auth
            if (pathname==='/login' && isLoggedIn){
                return Response.redirect(new URL("/",request.nextUrl))
            }else if (pathname !== "/" && pathname !== "/home" && pathname.indexOf("/static") ===-1 ) {
                return isLoggedIn
            }
            // else if (pathname === "/") {
            //     return Response.redirect(new URL("/home",request.nextUrl))
            // }
            return true
        },
        async jwt({ token}) {
            // let verifyUser = await verifyLogin()
            let verifyUser = {}
            token.name = verifyUser.name;
            token.img = verifyUser.img;
            token.elliot_token = verifyUser.elliot_token
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.name = token.name;
                session.elliot_token = token.elliot_token
            }
            return session;
        },
    },
    pages:{
        signIn:'/login'
    }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)
