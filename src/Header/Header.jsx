import { Button, Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
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
            <Button className="bg-transparent border border-none">
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
  );
}

export default Header;
