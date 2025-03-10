import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Products({ setCartProducts, cartProducts, setTotal, setPay, setCountCart, setCountActive }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((respuesta) => respuesta.json())
      .then((respuesta) => {
        const cosmeticos = respuesta.map((producto) => {
          return {
            id: producto.id,
            title: producto.title,
            description: producto.description,
            image: producto.image,
            price: producto.price,
          };
        });
        setProductos(cosmeticos);
      })
      .catch((error) => {
        setError(error);
        console.log("Error en la API ", error);
      });
  }, []);

  const addToCart = (id, title, image, price) => {
    const product = {
      id,
      title,
      image,
      price,
      initialPrice: price,
      cantidad: 1,
    };
    const prodExists = cartProducts.find((cartProd) => cartProd.id === id);
    if (!prodExists) {
      setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
    } else {
      prodExists.cantidad++;
      prodExists.price += prodExists.initialPrice;
      setCartProducts((prevCartProducts) => [...prevCartProducts]);
    }
    setCountCart((prevCountCart) => prevCountCart + 1)
    setTotal((prevTotal) => prevTotal + product.initialPrice);
    setPay(false)
    setCountActive(true)
  };

  console.log(cartProducts);
  return (
    <Container>
      <Row>
        <h1 className="text-warning text-center">Nuestros productos</h1>

        {productos.map((producto) => (
          <Col className="my-5" key={producto.id}>
            <Card
              className="border-5 border-warning"
              style={{ width: "18rem" }}
            >
              <Card.Img
              
                variant="top"
                src={producto.image}
                style={{ objectFit: "cover", height: "22rem" }}
              />
              <Card.Body className="text-center">
                <Card.Title >{producto.title}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <p className="text-success" >
                  Price: {producto.price}€
                </p>
                <Button
                  variant="warning"
                  onClick={() =>
                    addToCart(
                      producto.id,
                      producto.title,
                      producto.image,
                      producto.price
                    )
                  }
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
