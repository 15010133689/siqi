import {createTheme} from "@mui/material";
import {green, red} from "@material-ui/core/colors";
import {deepPurple, grey, yellow} from "@mui/material/colors";
import {useSelector} from "react-redux";

const Palette = () => {
    const {mode} = useSelector(state => state.themes)
    return(createTheme({
        palette:{
            mode,
            grey:{
                shortcut:'#e3e4e5',
                tbShortcut:'#f5f5f5'
            },
            primary:{
                ...grey,
                ...(mode === 'dark' && {main: grey[100]})
            },
            secondary:{
                ...green,
                ...(mode === 'dark' && {main: green[300]})
            },
            error:{
                ...red,
                ...(mode === 'dark' && {main: red[300]})
            },
            warning:{
                ...yellow,
                ...(mode === 'dark' && {main: yellow[300]})
            },
            info:{
                ...grey,
                ...(mode === 'dark' && {main: grey[300]})
            },
            success:{
                ...deepPurple,
                ...(mode === 'dark' && {main: deepPurple[300]})
            },
            background:{
                main:'#0a0000',
                ...(mode === 'dark' && {main: '0A0000FF'})
            },
            text:{
                main: '#fff',
                ...(mode === 'dark' && {main: grey[300]})
            },
            contrastThreshold:4.5
        }
    }))
}
export default Palette