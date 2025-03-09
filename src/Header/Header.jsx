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

function Header({ cartProducts, setCartProducts, total, setTotal, setPayment }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleDelete = (id) => {
    const productIndex = cartProducts.findIndex(
      (cartProduct) => cartProduct.id === id
    );
    cartProducts.splice(productIndex, 1);
    setCartProducts((prevCartProducts) => [...prevCartProducts]);
  };

  const handleAdd = (id) => {
    const product = cartProducts.find((cartProduct) => cartProduct.id === id);

    product.cantidad++;
    product.price += product.initialPrice;
    setTotal((prevTotal) => prevTotal + product.initialPrice);
    console.log(total);
    setCartProducts((prevCartProducts) => [...prevCartProducts]);
  };
  const handleMinus = (id) => {
    const product = cartProducts.find((cartProduct) => cartProduct.id === id);

    if (product.cantidad < 2) {
      handleDelete(product.id);
    }
    product.cantidad--;
    product.price -= product.initialPrice;
    setTotal((prevTotal) => prevTotal - product.initialPrice);
    setCartProducts((prevCartProducts) => [...prevCartProducts]);
  };

  const handlePayment = () => {
    setPayment(true)
    setToggle(false)
  }



  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="etsy.png"
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
            />
            <Navbar.Text>Etsy</Navbar.Text>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand>
              <Button
                onClick={handleToggle}
                className="bg-transparent border border-0"
              >
                <img
                  alt=""
                  src="shopping-bag.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </Button>
              
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {toggle && (
                <ListGroup className="d-flex flex-column align-items-end justify-content-center mx-5 p-10" style={{maxHeight: '35rem', position: 'absolute', right: '0', zIndex: '1', boxSizing: 'border-box'}} >
                  <div style={{width: '35rem', height: '32rem', overflowY: 'scroll'}}>
                  {cartProducts.map((cartProduct) => (
                    
                    <ListGroup.Item
                      key={cartProduct.id}
                      as="li"
                      style={{boxSizing: 'border-box', marginTop: '0'}}
                      className="d-flex justify-content-between align-items-start"
                    >
                      <img src={cartProduct.image} className="w-25 h-100" />
                      <div className="fw-bold mx-4 flex-grow-1">
                        <p>{cartProduct.title}</p>
                        <div>
                          <Button
                            onClick={() =>
                              handleMinus(cartProduct.id, cartProduct.price)
                            }
                          >
                            -
                          </Button>
                          <Form.Label>{cartProduct.cantidad}</Form.Label>
                          <Button
                            onClick={() =>
                              handleAdd(cartProduct.id, cartProduct.price)
                            }
                          >
                            +
                          </Button>
                        </div>
                        <p className="">
                          Price: {cartProduct.price.toFixed(2)}€
                        </p>
                      </div>

                      <Badge
                        className="text-dark bg-light"
                        onClick={() => handleDelete(cartProduct.id)}
                      >
                        <img src="x.png" width="10" height="10" />
                      </Badge>
                    </ListGroup.Item>
                  ))}
                  <div className="bg-white w-100">
                    
                    <Button onClick={handlePayment} className="bg-warning w-100 fw-bold text-uppercase fs-6">Buy - Total: {total.toFixed(2)}</Button>
                  </div></div>
                </ListGroup>
              )}
    </>
  );
}

export default Header;
