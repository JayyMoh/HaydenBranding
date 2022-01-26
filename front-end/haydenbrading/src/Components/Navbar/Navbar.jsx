import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import { Avatar, Icon, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import makeStyles from './style'
import MediaQuery from 'react-responsive'
import { SwipeableDrawer } from '@mui/material'
import { Divider } from '@material-ui/core'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Menu from '@mui/icons-material/Menu'



const Navbar = () => {

    const classes = makeStyles()

    const navLinks = [
        { name: 'Home', href: '/'},
        { name: 'About Us', href: '/about'},
        { name: 'Shop', href: '/shop'},
        { name: 'Contact Us', href: '/contact'},
        { name: 'Sign In', href: '/login'},
      ]

    const [open, setOpen] = useState(false)

    return (
        <div>
            <AppBar position='static'>
                <ToolBar className={ classes.navBar }>
                    <Avatar className={ classes.haydenLogo } alt='Hayden-logo' src='https://cdn.discordapp.com/attachments/268495515048607755/935957977884655676/Hayden-H.png' />
                    <MediaQuery maxWidth={700}>
                        {(showMenu) =>
                            showMenu
                            ?
                            <>
                                <Typography className={ classes.title } component={ Link } to='/'>
                                    <h1 className={ classes.brandName }>Hayden Branding</h1>
                                </Typography>
                                <IconButton aria-label='menu' onClick={() => setOpen(true)}>
                                    <MenuIcon className={ classes.menuIcon } fontSize='large' />
                                </IconButton>
                            </>
                                :
                            <>
                                <Typography>
                                    {navLinks.map((item) => (
                                        <Link className={ classes.desktopMenuList } to={item.href}>{item.name}</Link>
                                    ))}
                                </Typography>
                                <IconButton display='none' />
                            </>
                        }
                    </MediaQuery>
                </ToolBar>
                <SwipeableDrawer
                    className={ classes.mobileDrawer }
                    anchor='right'
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                >
                    <div className={ classes.chevronIcon }>
                        <IconButton onClick={() => setOpen(false)}>
                            <ChevronRightIcon />
                        </IconButton>
                    </div>
                    <Divider />
                        <Typography onClick={() => setOpen(false)}>
                            {navLinks.map((item) => (
                                <Link className={ classes.mobileMenuList } to={item.href}>{item.name}</Link>
                            ))}
                        </Typography>
                </SwipeableDrawer>
            </AppBar>
        </div>
    )
}

export default Navbar