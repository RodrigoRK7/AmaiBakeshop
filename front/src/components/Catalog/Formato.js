import React from 'react'
// import Catalog from './Catalog'
import {Button, Card} from "react-bootstrap";
import pastel1 from '../../assets/pastel1.jfif';
import pastel2 from '../../assets/pastel2.jfif';
import pastel3 from '../../assets/pastel3.jfif';
import pastel4 from '../../assets/pastel4.jfif';
import pastel5 from '../../assets/pastel5.jfif';
import pastel6 from '../../assets/pastel6.jfif';
import pastel7 from '../../assets/pastel7.jfif';
import pastel8 from '../../assets/pastel8.jfif';
import './Formato.css'

function Formato() {
  return (
    <div className="Formato">
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pastel1} />
                        <Card.Body>
                            <Card.Title>Pastel de vainilla flork</Card.Title>
                            <Card.Text>
                            Precio: $350
                            </Card.Text>
                            <Button variant="primary">Añadir al carrito</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pastel2} />
                        <Card.Body>
                            <Card.Title>Pastel unicornio</Card.Title>
                            <Card.Text>
                            Precio: $500
                            </Card.Text>
                            <Button variant="primary">Añadir al carrito</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pastel3} />
                        <Card.Body>
                            <Card.Title>Pastel de fresa</Card.Title>
                            <Card.Text>
                            Precio: $650
                            </Card.Text>
                            <Button variant="primary">Añadir al carrito</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pastel4} />
                        <Card.Body>
                            <Card.Title>Pastel de fresa</Card.Title>
                            <Card.Text>
                            Precio: $650
                            </Card.Text>
                            <Button variant="primary">Añadir al carrito</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Formato