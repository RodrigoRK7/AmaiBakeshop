import React from 'react'
import Catalog from './Catalog'
import './Formato.css'

function Formato() {
  return (
    <div className="Formato">
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                <div className="col-md-4">
                    <Catalog/>
                </div>
                <div className="col-md-4">
                    <Catalog/>
                </div>
                <div className="col-md-4">
                    <Catalog/>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Formato