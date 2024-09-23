import Header from "components/layout/header";
import Footer from "components/layout/footer"

export const metadata = {
    title: 'Home',
}
const HomeLayout = ({children}) => {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default HomeLayout