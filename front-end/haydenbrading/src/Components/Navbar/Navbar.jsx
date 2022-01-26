import React from 'react'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import { Avatar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import makeStyles from './style'
import { useMediaQuery } from '@mui/material'
import MediaQuery from 'react-responsive'


const Navbar = () => {

    const classes = makeStyles()

    return (
        <div>
            <AppBar position='static'>
                <ToolBar className={ classes.navBar }>
                    <MediaQuery maxWidth={700}>
                        {(showMenu) =>
                            showMenu
                            ? <IconButton aria-label='menu'>
                                  <MenuIcon className={ classes.menuIcon } fontSize='large' />
                            </IconButton> :
                            <IconButton display='none' />
                        }
                    </MediaQuery>
                    <Typography className={ classes.title } component={ Link } to='/'>
                        <h1 className={ classes.brandName }>Hayden Branding</h1>
                    </Typography>
                    <Avatar className={ classes.haydenLogo } alt='Hayden-logo' src='https://cdn.discordapp.com/attachments/268495515048607755/935586170618916905/Hayden-H.png' />
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Navbar