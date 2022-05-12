import React from 'react'
import {Button, Card} from "react-bootstrap";
import pastel1 from '../../assets/pastel1.jfif';

function Catalog() {
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pastel1} />
            <Card.Body>
                <Card.Title>Patel personalizado</Card.Title>
                <Card.Text>
                Un sukulento pastel.
                </Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
            </Card>
    </>
  )
}

export default Catalog