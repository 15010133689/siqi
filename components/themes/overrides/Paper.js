
const Paper = (theme) => {
    return {
        MuiPaper:{
            styleOverrides:{
                root:{
                    backgroundColor:theme.palette.mode === 'dark' ? '#1A2027' : '#f6f6f6',
                    ...theme.typography.body2,
                    padding:theme.spacing(1),
                    textAlign:'center',
                    color:theme.palette.text.secondary
                }
            }
        }
    }
}
export default Paper