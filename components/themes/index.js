"use client"
import {createTheme, ThemeProvider} from "@material-ui/core";
import {useMemo} from "react";
import ComponentOverrides from "./overrides";
import Palette from "./palette";
import Typography from "./typography";
import {CssBaseline} from "@mui/material";

const ThemeCustom = ({children}) =>{
    const themePalette = Palette()
    const themeTypography = Typography(`'Public Sans', sans-serif`)
    const themeOptions = useMemo(() =>({
        breakpoints:{
            values:{
                xs: 0,
                sm: 768,
                md: 1024,
                lg: 1266,
                xl:1536
            }
        },
        transitions:{
            duration: {
                enteringScreen: 225,
                leavingScreen: 195,
            },
            easing: {
                easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                easeIn: 'cubic-bezier(0.4, 0, 1, 1)'
            }
        },
        palette:themePalette.palette,
        typography:themeTypography
    }))
    const theme = createTheme(themeOptions);
    theme.components = ComponentOverrides(theme)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
export default ThemeCustom