

const Button = (theme) => {
    const disableStyle = {
        '@.Mui-disabled':{
            backgroundColor: theme.palette.primary.main[200]
        }
    }
    return {
        MuiButton:{
            defaultProps:{
                disableElevation:true
            },
            styleOverrides:{
                root:{
                    fontWeight:400
                },
                contained:{
                    ...disableStyle
                },
                outlined:{
                    ...disableStyle
                }
            }
        }
    }
}
export default Button