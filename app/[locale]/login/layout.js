import Header from "components/layout/login/header/Index";
import Footer from "components/layout/login/footer/Index";

export const metadata = {
    title: 'Login',
}
export default function LoginLayout({children}){
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}