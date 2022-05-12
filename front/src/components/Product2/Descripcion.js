import React from 'react'
import {Button, Card, ListGroup, Badge} from "react-bootstrap";
import pastel1 from '../../assets/pastel1.jfif';
import './Descripcion.css'

function Descripcion() {
  return (
    <div className="Descripcion">
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col">
                    <Card style={{ width: '20rem' }}>
                        <div>
                            <Card.Img variant="top" src={pastel1} />
                        </div>
                        
                        <Card.Body>
                            <Card.Title>Pastel personalizado $10</Card.Title>
                            <Card.Text>
                            Un sukulento pastel.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
                <div className="col">
                    <br></br>
                    <br></br>

                    <h3>
                        Pastel sukulento <Badge bg="secondary">Nuevo</Badge>
                    </h3>
                   
                    <ListGroup>
                        <ListGroup.Item as="li" active>
                            Ingredientes:
                        </ListGroup.Item>
                        <ListGroup.Item>Harina</ListGroup.Item>
                        <ListGroup.Item>Agua</ListGroup.Item>
                        <ListGroup.Item>Droga</ListGroup.Item>
                        <ListGroup.Item>Maiz</ListGroup.Item>
                        <ListGroup.Item>Azucar</ListGroup.Item>
                    </ListGroup>
                    <br></br>
                    
                    <Button variant="primary">Añadir al carrito</Button>
                </div>
               
            </div>
        </div>
        
    </div>
  )
}

export default Descripcion