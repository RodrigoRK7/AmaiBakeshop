import React from 'react'

// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';

import {Products, Navbar} from './components';

// Se instalo la extension: dsznajder.es7-react-js-snippets
const app = () => {
  return (
    <div>
        <Navbar />
        <Products />
    </div>
  )
}

export default app