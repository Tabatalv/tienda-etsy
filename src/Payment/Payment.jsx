import { Button, Form, ListGroup, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Payment({
  cartProducts,
  setCartProducts,
  setTotal,
  total,
  setPayment,
  setPay,
  setCountCart,
  setCountActive,
  setTotalActive,
}) {
  const handlePay = () => {
    setPayment(false);
    setPay(true);
    setCartProducts([]);
    setTotal(0);
    setCountCart(0);
    setCountActive(false);
    setTotalActive(false);
  };

  return (
    <>
      <Container fluid className="bigDiv w-100 h-100">
        <Row className="d-flex bg-white justify-content-center w-100 h-100">
          <Col xs={12} md={6} lg={4}></Col>

          <Form className="d-flex flex-column formPayment">
            <h3 className="title">Personal Data</h3>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex flex-row"
              controlId="formBasicName"
            >
              <div className="d-fex flex-col">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </div>

              <div className="d-fex flex-col mx-3">
                <Form.Label className="fw-bold">Last name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </div>
            </Form.Group>

            <h3 className="title">Delivery</h3>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="fw-bold">Country</Form.Label>
              <Form.Control type="text" placeholder="Spain" disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="fw-bold">Address</Form.Label>
              <Form.Control type="text" placeholder="Spain" />
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="formBasicName">
              <div className="d-fex flex-col">
                <Form.Label className="fw-bold">Postal code</Form.Label>
                <Form.Control type="text" placeholder="Postal code" />
              </div>

              <div className="d-fex flex-col mx-3">
                <Form.Label className="fw-bold">City</Form.Label>
                <Form.Control type="text" placeholder="Zaragoza" disabled />
              </div>

              <div className="d-fex flex-col">
                <Form.Label className="fw-bold">Province</Form.Label>
                <Form.Control type="text" placeholder="Zaragoza" disabled />
              </div>
            </Form.Group>

            <h3 className="title">Payment</h3>

            <Form.Group
              className="mb-3 d-flex align-items-center"
              controlId="formBasicName"
            >
              <Form.Control type="radio" className="radio" checked />
              <Form.Label className="fw-bold">Credit Card </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="fw-bold">Card number</Form.Label>
              <Form.Control type="text" placeholder="Card number" />
            </Form.Group>

            <Form.Group className="d-flex">
              <div className="d-fex flex-col">
                <Form.Label className="fw-bold">Expiration date</Form.Label>
                <Form.Control type="text" placeholder="Expiration date" />

                <Form.Label className="fw-bold">Security code</Form.Label>
                <Form.Control type="text" placeholder="Security code" />
              </div>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              onClick={handlePay}
              className="btn text-white fw-bold text-uppercase"
              type="submit"
            >
              Buy
            </Button>
          </Form>
          

          <Col xs={12} md={6} lg={4} className="listGroupPayment">

          <ListGroup className="d-flex flex-column justify-content-between h-100">
            <div className="divListGroupItem flex-grow-1 overflow-auto">
              {cartProducts.map((cartProduct) => (
                <ListGroup.Item
                  key={cartProduct.id}
                  as="li"
                  className="d-flex justify-content-between align-items-start listGroupItemPayment"
                >
                  <img src={cartProduct.image} className="w-25 h-100" />
                  <div className="fw-bold mx-4 flex-grow-1">
                    <p className="title">{cartProduct.title}</p>
                    <p>Quantity: {cartProduct.cantidad}</p>
                    <p className="text-success">
                      {cartProduct.price.toFixed(2)}€
                    </p>
                  </div>
                </ListGroup.Item>
              ))}
            </div>
            <div className="bg-white w-100">
              <p className="w-100 fw-bold text-success text-end text-uppercase fs-6">
                Total: {total.toFixed(2)}€
              </p>
            </div>
          </ListGroup></Col>
        </Row>
      </Container>
    </>
  );
}

export default Payment;
