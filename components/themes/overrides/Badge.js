

const Badge = (theme) => {
    return {
        MuiBadge:{
            styleOverrides:{
                root:{
                    right: -3,
                    border: `2px solid ${theme.palette.background.paper}`,
                    padding: '0 4px',
                }
            }
        }
    }
}
export default Badge