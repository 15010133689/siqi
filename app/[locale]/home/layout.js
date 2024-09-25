import Header from "components/layout/header";
import Footer from "components/layout/footer"

export const metadata = {
    title: 'Home',
}
const HomeLayout = ({children}) => {
    return(
        <>
            {children}
        </>
    )
}

export default HomeLayout