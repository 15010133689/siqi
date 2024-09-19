import Header from "components/layout/main/header";
export const metadata = {
    title: 'Home',
}
const HomeLayout = ({children}) => {
    return(
        <>
            <Header />
            {children}
        </>
    )
}

export default HomeLayout