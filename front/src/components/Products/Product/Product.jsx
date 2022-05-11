import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

import useStyles from './styles';

const Product = ({producto}) => {
  const classes = useStyles();

  return (
    <div>
        <Card className={classes.root}>
          {/* Aqui vamos a poner la imagen del producto */}
          <CardMedia className= {classes.media} image={producto.image} title={producto.name}/>
          <CardContent>
            <div className={classes.CardContent}>
              <Typography variant = "h5" gutterBottom>
                {producto.name}
              </Typography>
              <Typography variant = "h5">
                {producto.price}
              </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">{producto.description}</Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label="Añadir al carrito">
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </Card>
    </div>
  )
}

export default Product