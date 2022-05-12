import React from 'react'
// import { Catalog, Formato } from './components';

import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';

// import {Products, Navbar, Login} from './components';
import Formato from './components/Catalog/Formato';
import Descripcion from './components/Product2/Descripcion';
// Se instalo la extension: dsznajder.es7-react-js-snippets
const app = () => {
  return (
    <div>
        {/* <Navbar />
        <Products /> */}
        {/* <Login/> */}

        <Formato/>
        {/* <Descripcion/> */}
    </div>
  )
}

export default app