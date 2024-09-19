import {Box} from "@mui/material";
import Shortcut from "./Shortcut";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({children}) => {
    return(
        <Box>
            <Shortcut />
            <Header />
            {children}
            <Footer />
        </Box>
    )
}
export default MainLayout