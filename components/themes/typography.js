
const Typography = (fontFamily) => ({
    htmlFontSize: 16,
    fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
        fontWeight: 600,
        fontSize: '2.375rem',
        lineHeight: 1.21
    },
    h2: {
        fontWeight: 600,
        fontSize: '1.875rem',
        lineHeight: 1.27
    },
    h3: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.33
    },
    h4: {
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.4
    },
    h5: {
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: 1.5
    },
    h6: {
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.57
    },
    caption: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.66
    },
    body1: {
        fontSize: '0.875rem',
        lineHeight: 1.57
    },
    body2: {
        fontSize: '0.75rem',
        lineHeight: 1.66
    },
    subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 600,
        lineHeight: 1.57
    },
    subtitle2: {
        fontSize: '0.75rem',
        fontWeight: 500,
        lineHeight: 1.66
    },
    overline: {
        lineHeight: 1.66
    },
    button: {
        textTransform: 'capitalize'
    },
    shortcut: {
        fontSize: '12px',
        color: '#999',
        textAlign:'center'
    },
    tbShortcut: {
        fontSize: '12px',
        color: '#6c6c6c',
        textAlign:'center'
    },
    shopcart: {
        fontSize: '12px',
        color: '#e1251b',
        textAlign:'center'
    },
    product:{
        color: '#333',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '18px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    benifit:{
        color: '#ff0036',
        fontSize: '12px',
        lineHeight: '16px',
        marginRight: '1px',
        float:'left',
        whiteSpace: 'nowrap'
    },
    handPrice:{
        alignSelf: 'flex-end',
        color: '#666',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '17px',
        whiteSpace: 'nowrap'
    },
    price:{
        color: '#ff0035',
        fontFamily: 'PingFangSC-Medium',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '22px',
        marginLeft: '5px',
        whiteSpace: 'nowrap'
    },
    monthSale:{
        alignSelf: 'flex-end',
        color: '#9b9b9b',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '20px'
    },
    rmbPrice:{
        alignSelf: 'flex-end',
        color: '#fff',
        width:'52px',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '26px',
        whiteSpace: 'nowrap',
        textAlign: 'center'
    },
    collect:{
        color: '#fff',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '26px',
        marginLeft: '6px',
        right: '6px',
        top: 0
    },
    footer:{
        textAlign: 'left',
        fontSize: '12px',
        color:'#333',
        lineHeight: '2.4',
        textDecoration:'none'
    },
    categoryKey:{
        color: '#111',
        fontSize: '12px',
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: '20px',
        width: '80px'
    },
    categoryVal:{
        color: '#111',
        fontSize: '12px',
        letterSpacing: 0,
        lineHeight: '20px',
        width: '165px'
    }

})

export default Typography