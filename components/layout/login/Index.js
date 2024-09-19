import {Box} from "@mui/material";
import Header from './Header'
import Footer from "./Footer";

const LoginLayout = ({children}) => {

    return(
        <Box>
            <Header />
            {children}
            <Footer />
        </Box>
    )
}

export default LoginLayout