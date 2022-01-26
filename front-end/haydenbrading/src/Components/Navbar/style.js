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
    Link: {
        color: 'red',
    },
    title: {
        textDecoration: 'none',
    },
    brandName: {
        fontFamily: 'Old Standard TT, serif',
        color: 'white',
        fontSize: '23px',
    },

}))