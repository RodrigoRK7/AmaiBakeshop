import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// Arreglo de productos
const productos = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800' },
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://ep01.epimg.net/elpais/imagenes/2021/12/10/album/1639143803_433213_1639745607_noticia_normal.jpg' },
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            {/* Mete los productos en una Grid */}
            <Grid container justify="center" spacing={4}>
                {/* Por cada producto retornamos... */}
                {productos.map((producto) => (
                    <Grid key={producto.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product producto={producto}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
   
}

export default Products