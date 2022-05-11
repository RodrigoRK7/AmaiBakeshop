import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/shop.jfif';
import useStyles from './styles';

const NavBar = () => {
    const classes = useStyles();
    
    return (
    <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                {/* El logo aparecera a la izq */}
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="AmaiBakeshop" height="25px" className={classes.image}/>
                    AmaiBakeShop
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        {/* El numero de items que tendremos en el carro */}
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default NavBar