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
import '../App.css'

function Header({ cartProducts, setCartProducts, total, setTotal, setPayment, setCountCart, countCart, setTotalActive, totalActive, setCountActive, countActive}) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
   
  };

  const handleDelete = (id) => {
    const productIndex = cartProducts.findIndex(
      (cartProduct) => cartProduct.id === id
    );
    const product = cartProducts.find((cartProduct) => cartProduct.id === id);
    cartProducts.splice(productIndex, 1);
    setCountCart((prevCountCart) => prevCountCart - product.cantidad)
    setTotal((prevTotal) => prevTotal - product.price)
    setCartProducts((prevCartProducts) => [...prevCartProducts]);

    if(cartProducts.length < 1){
      setCountActive(false)
      setTotalActive(false)
    }
  };

  const handleAdd = (id) => {
    const product = cartProducts.find((cartProduct) => cartProduct.id === id);

    product.cantidad++;
    product.price += product.initialPrice;
    setTotal((prevTotal) => prevTotal + product.initialPrice);
    setCountCart((prevCountCart) => prevCountCart + 1)
    setCartProducts((prevCartProducts) => [...prevCartProducts]);
  };
  const handleMinus = (id) => {
    const product = cartProducts.find((cartProduct) => cartProduct.id === id);

    if (product.cantidad < 2) {
      handleDelete(product.id);
      
    }

    if(cartProducts.length < 1){
      setTotalActive(false)
    }
    product.cantidad--;
    product.price -= product.initialPrice;
    setTotal((prevTotal) => prevTotal - product.initialPrice);
    setCountCart((prevCountCart) => prevCountCart - 1)
    setCartProducts((prevCartProducts) => [...prevCartProducts]);
    
  };

  const handlePayment = () => {
    setPayment(true)
    setToggle(false)
  }



  return (
    <>
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
                <div className="cartImg">
                <img

                  alt=""
                  src="shopping-bag.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  
                />
                
                  {countActive && (
                    <div>
                    <Badge style={{position: 'absolute'}} className="bg-warning pill text-white">{countCart}</Badge>
                        </div>
                  )}
                          
                        </div>
              </Button>
              
            </Navbar.Brand>
      
        </Container>
      </Navbar>
      {toggle && (
                <ListGroup className="d-flex flex-column align-items-end justify-content-center mx-5 listGroup w-sm-75 mh-75 " >
                  <div className="divListGroup">
                  {cartProducts.map((cartProduct) => (
                    
                    <ListGroup.Item
                      key={cartProduct.id}
                      as="li"
                     
                      className="d-flex justify-content-between align-items-center listGroupItem"
                    >
                      
                        <img src={cartProduct.image} className="w-25 h-100 img-fluid me-2"/>
                 
                      
                      <div className="fw-bold mx-4 flex-grow-1">
                        <p className="title">{cartProduct.title}</p>
                        <div>
                          <Button className="btnHandler "
                            onClick={() =>
                              handleMinus(cartProduct.id, cartProduct.price)
                            }
                          ><p className="text-center">-</p>
                            
                          </Button>
                          <Form.Label>{cartProduct.cantidad}</Form.Label>
                          <Button className="btnHandler "
                            onClick={() =>
                              handleAdd(cartProduct.id, cartProduct.price)
                            }
                          ><p className="text-center">+</p>
                            
                          </Button>
                        </div>
                        <p className="text-success">
                         {cartProduct.price.toFixed(2)}€
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
                  
                    {totalActive && (
                      <div className="w-100" style={{marginTop: 'auto'}}>
<Button onClick={handlePayment} className="w-100 fw-bold text-uppercase fs-6 btn">Buy - Total: {total.toFixed(2)}</Button>
                  </div>
                    )}
                    
                  </div>
                </ListGroup>
              )}
    </>
  );
}

export default Header;
