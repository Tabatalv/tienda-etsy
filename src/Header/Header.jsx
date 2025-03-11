import { useState } from "react";
import {
  Button,
  Container,
  ListGroup,
  Navbar,
  Badge,
  Form,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

//Recogemos las variables de estado que necesitaremos
function Header({
  cartProducts,
  setCartProducts,
  total,
  setTotal,
  setPayment,
  setCountCart,
  countCart,
  setTotalActive,
  totalActive,
  setCountActive,
  countActive,
}) {

  //creamos toggle que nos ayudara a abrir y cerrar el carrito de compras
  const [toggle, setToggle] = useState(false);

  //Función para abrir y cerrar el carrito, si ya esta abierto lo cierra, si no lo abre
  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  //Función para eliminar productos del carrito tocando el boton de eliminar, obtenemos el id del producto que queremos eliminar y busca mediante findIndex el producto 
  //que coincida con el id obtenido y lo elimina, mediante el useState actualizamos el contador de productos y el total, además de actualizar el carrito de compras
  const handleDelete = (id) => {
    const productIndex = cartProducts.findIndex(
      (cartProduct) => cartProduct.id === id
    );
    const product = cartProducts.find((cartProduct) => cartProduct.id === id);
    cartProducts.splice(productIndex, 1);
    setCountCart((prevCountCart) => prevCountCart - product.cantidad);
    setTotal((prevTotal) => prevTotal - product.price);
    setCartProducts((prevCartProducts) => [...prevCartProducts]);

    // si no hay productos en el carrito, el contador de productos y el total se desactivan
    if (cartProducts.length < 1) {
      setCountActive(false);
      setTotalActive(false);
    }
  };

  //Función para aumentar la cantidad y el precio del producto tocando el boton de aumentar, buscamos el producto mediante find y aumentamos la cantidad y el precio
  //actualizamos mediante el useState el contador de productos y el total, además del carrito de compras
  const handleAdd = (id) => {
    const product = cartProducts.find((cartProduct) => cartProduct.id === id);

    product.cantidad++;
    product.price += product.initialPrice;
    setTotal((prevTotal) => prevTotal + product.initialPrice);
    setCountCart((prevCountCart) => prevCountCart + 1);
    setCartProducts((prevCartProducts) => [...prevCartProducts]);
  };

  //Función para disminuir la cantidad y el precio del producto tocando el boton de disminuir, buscamos el producto mediante find y disminuimos la cantidad y el precio
  //actualizamos mediante el useState el contador de productos y el total, tambien del carrito de compras
  const handleMinus = (id) => {
    const product = cartProducts.find((cartProduct) => cartProduct.id === id);

    if (product.cantidad < 2) {
      handleDelete(product.id);
    }

    //Si no hay productos en el carrito, el total se desactiva
    if (cartProducts.length < 1) {
      setTotalActive(false);
      
    }
    product.cantidad--;
    product.price -= product.initialPrice;
    setTotal((prevTotal) => prevTotal - product.initialPrice);
    setCountCart((prevCountCart) => prevCountCart - 1);
    setCartProducts((prevCartProducts) => [...prevCartProducts]);
  };
//si se toca el boton de comprar, se abre la ventana de pago y se oculta el carrito
  const handlePayment = () => {
    setPayment(true);
    setToggle(false);
  };

  return (
    <>
    {/* Carrito hecho con bootstrap mostrando el producto elegido, con botones para agregar mas o quitar, y eliminarlo por completo del carrito, y el boton para comprar  */}
      <Navbar className="bg-header" expand="lg">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="Etsy-Emblem.png"
              className="d-inline-block align-top mx-2 etsy"
            />
          </Navbar.Brand>

          <Navbar.Brand>
            <Button
              onClick={handleToggle}
              className="bg-transparent border border-0"
            >
              <div className="cartImg position-relative">
                <img
                  alt=""
                  src="shopping-bag-white.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />

                {countActive && (
                  <div>
                    <Badge
                      style={{ position: "absolute" }}
                      className="bg-warning pill text-white "
                    >
                      {countCart}
                    </Badge>
                  </div>
                )}
              </div>
            </Button>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {toggle && (
        <ListGroup className="d-flex flex-column align-items-end justify-content-center mx-5 listGroup w-sm-75 mh-75 position-absolute">
          <div className="divListGroup">
            {cartProducts.map((cartProduct) => (
              <ListGroup.Item
                key={cartProduct.id}
                as="li"
                className="d-flex justify-content-between align-items-center listGroupItem "
              >
                <img
                  src={cartProduct.image}
                  className="w-25 h-100 img-fluid me-2"
                />

                <div className="fw-bold mx-4 flex-grow-1">
                  <p className="title title-mobile">{cartProduct.title}</p>
                  <div className="d-flex">
                    <Button
                      className="btnHandler d-flex align-items-center justify-content-center"
                      onClick={() =>
                        handleMinus(cartProduct.id, cartProduct.price)
                      }
                    >
                      -
                    </Button>
                    <Form.Label>{cartProduct.cantidad}</Form.Label>
                    <Button
                      className="btnHandler d-flex flex-column align-items-center justify-content-center"
                      onClick={() =>
                        handleAdd(cartProduct.id, cartProduct.price)
                      }
                    >
                      +
                    </Button>
                  </div>
                  <p className="text-success">
                    {cartProduct.price.toFixed(2)}€
                  </p>
                </div>

                <Badge
                  className="text-dark bg-light align-self-start"
                  onClick={() => handleDelete(cartProduct.id)}
                >
                  <img src="x.png" width="10" height="10" />
                </Badge>
              </ListGroup.Item>
            ))}

            {totalActive && (
              <div className="w-100" style={{ marginTop: "auto" }}>
                <Button
                  onClick={handlePayment}
                  className="w-100 fw-bold text-uppercase fs-6 btn"
                >
                  Buy - Total: {total.toFixed(2)}
                </Button>
              </div>
            )}
          </div>
        </ListGroup>
      )}
    </>
  );
}

export default Header;
