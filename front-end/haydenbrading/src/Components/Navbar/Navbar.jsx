import React from 'react'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import { IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import makeStyles from './style'

function Navbar() {

    const classes = makeStyles()

    return (
        <div>
            <AppBar position='static'>
                <ToolBar className={ classes.navBar }>
                    <IconButton aria-label='menu'>
                        <MenuIcon className={ classes.menuIcon } />
                    </IconButton>
                    <Typography component={ Link } to='/'>
                        Hayden Branding
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Navbar