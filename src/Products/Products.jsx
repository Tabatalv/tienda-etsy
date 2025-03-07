import React, { useState , useEffect} from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Products() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(respuesta =>respuesta.json())
    .then(respuesta => {
      const cosmeticos = respuesta.map(producto => {
        return {
          id: producto.id,
          title:producto.title,
          description:producto.description,
          image:producto.image,
          price:producto.price,
        }
      })
      setProductos(cosmeticos)
    } 

    )
  }, [])

  return(
    
      <Container>
        <Row>
          <h1 className='text-warning text-center'>Nuestros productos</h1>
    
      {productos.map(producto => (
            <Col className='my-5'>
            <Card className='border-5 border-warning' key={producto.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={producto.image} style={{objectFit: 'cover', height: '22rem'}} />
              <Card.Body className='text-center'>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text >
                  {producto.description}
                </Card.Text>
                <p className='text-success' >Price: {producto.price}€</p>
                <Button variant="warning">Add to cart</Button>
              </Card.Body>
            </Card>
        
      </Col>
       
      ))}
      </Row>
      </Container>
  )


}

export default Products