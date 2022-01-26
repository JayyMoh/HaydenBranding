import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    navBar: {
        backgroundColor: 'blue',
        borderBottom: '1px solid black',
    },
    menuIcon: {
        color: 'white',
    },
    Link: {
        color: 'white',
    },
    title: {
        textDecoration: 'none',
    },
    brandName: {
        fontFamily: 'Cinzel, serif',
        color: 'white',
        marginLeft: '10px',
        fontSize: '28px',
    }
}))