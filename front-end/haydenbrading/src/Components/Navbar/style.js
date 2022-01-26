import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    navBar: {
        backgroundColor: '#33A1DE',
        borderBottom: '1px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuIcon: {
        color: 'white',
    },
    title: {
        textDecoration: 'none',
    },
    brandName: {
        fontFamily: 'Old Standard TT, serif',
        color: 'white',
        fontSize: '23px',
    },
    drawerPaper: {
        backgroundColor: '#33A1DE',
        width: '30vw',
        height: '100vh',
        borderLeft: '1.5px inset gray'
    },
    mobileMenuList: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        padding: '5px',
        textDecoration: 'none',
        color: 'white',
        borderBottom: '1px inset gray',
        paddingLeft: '10px',
    },
    divider: {
        backgroundColor: 'gray',
    },
    desktopMenuList: {
        textDecoration: 'none',
        margin: '0 20px',
        color: 'white',
        fontFamily: 'Old Standard TT, serif',
        fontSize: '20px',
    },
    chevronIcon: {
        display: 'flex',
        justifyContent: 'flex-start',
        color: 'white',
    },
}))