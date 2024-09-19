

const ListItemText = (theme) => {
    return {
        MuiListItemText:{
            defaultProps:{
                disableElevation:true
            },
            styleOverrides:{
                root:{
                    fontSize: '0.375rem',
                }
            }
        }
    }
}
export default ListItemText