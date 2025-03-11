import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

//Recogemos las variables de estado que necesitaremos
function Products({
  setCartProducts,
  cartProducts,
  setTotal,
  setPay,
  setCountCart,
  setCountActive,
  setTotalActive,
}) {
  // Creamos la variable donde guardaremos los productos
  const [productos, setProductos] = useState([]);

  //Obtenemos los productos mediante la API pública, y obtenemos los productos solo con los datos que necesitaremos, gestionamos los errores mediante el catch 
  //y devolvemos un mensaje con el error en caso de fallar
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

  //Función para añadir productos al carrito, creamos un objeto que tendra el id, titulo, imagen y precio del producto que obtenemos como parámetros
  //  mediante onClick al tocar el boton de añadir al carrito de la función, y le creamos una ccopia del precio con la que realizaremos 
  // las operaciones al añadir ese mismo producto mas de una vez al carrito, 

  const addToCart = (id, title, image, price) => {
    const product = {
      id,
      title,
      image,
      price,
      initialPrice: price,
      cantidad: 1,
    };

    //Comprobamos si el producto ya existe en el carrito, si no existe se agrega, de lo contrario, se aumenta la cantidad y el precio y se actualiza mediante el useState 
    //mediante el setCartProducts actualizando con los produtos que ya existían, además se aumenta el contador de productos y el total, la barra oculta que muestra el total se activa
    //mediante el useState al igual que el contador de productos y se oculta el aviso de que se han comprado los productos

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

        {/* Map con los productos que obtenemos de la API, hecho con bootstrap react */}
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
