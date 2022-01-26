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
                        <MenuIcon className={ classes.menuIcon } fontSize='large' />
                    </IconButton>
                    <Typography className={ classes.title } component={ Link } to='/'>
                        <h1 className={ classes.brandName }>Hayden Branding</h1>
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Navbar