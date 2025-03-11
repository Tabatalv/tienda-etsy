import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Products({
  setCartProducts,
  cartProducts,
  setTotal,
  setPay,
  setCountCart,
  setCountActive,
  setTotalActive,
}) {
  const [productos, setProductos] = useState([]);

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
    setCountCart((prevCountCart) => prevCountCart + 1);
    setTotal((prevTotal) => prevTotal + product.initialPrice);
    setPay(false);
    setCountActive(true);
    setTotalActive(true);
  };

  console.log(cartProducts);
  return (
    <Container>
      <Row>
        <h1 className="title text-center">Our products</h1>

        {productos.map((producto) => (
          <Col
            xs={12}
            md={4}
            lg={3}
            className="my-5 d-flex justify-content-center"
            key={producto.id}
          >
            <Card
              className="border-2 border-warning"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src={producto.image}
                className="cardImg"
              />
              <Card.Body className="text-center">
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <p className="text-success fw-bold fs-4">{producto.price}€</p>
                <Button
                  className="text-white fw-bold btn"
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
