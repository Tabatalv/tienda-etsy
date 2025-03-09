import {Button, Form, ListGroup} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function Payment({cartProducts, setCartProducts, setTotal, total, setPayment, setPay}){

    const handlePay = () => {
        setPayment(false)
        setPay(true)
        setCartProducts([])
        setTotal(0)
        

    }


    return (
        <>

        <div  style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'black', zIndex: '1'}}>
        <div className='d-flex bg-white' style={{margin: '20rem', position: 'relative', bottom: '12rem'}}>
    <Form className='d-flex flex-column'  style={{width: '40rem', maxHeight: '40rem', overflowY:'scroll',  backgroundColor: 'white', position: 'relative', top: '0', left:'1rem'}}>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicName" >
        <div className='d-fex flex-col'>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
     </div>

     <div className='d-fex flex-col'>
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
        </div>
      </Form.Group>

      <h3>Delivery</h3>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Spain" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Spain" />
      </Form.Group>

      <Form.Group className="mb-3 d-flex" controlId="formBasicName">

      <div className='d-fex flex-col'>
        <Form.Label>Postal code</Form.Label>
        <Form.Control type="text" placeholder="Postal code" />
</div>

<div className='d-fex flex-col'>
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" />
</div>

<div className='d-fex flex-col'>
        <Form.Label>Province</Form.Label>
        <Form.Control type="text" placeholder="Zaragoza" disabled />
        </div>
      </Form.Group>

      <h3>Payment</h3>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label><Form.Control type="radio" />Credit card</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Card number</Form.Label>
        <Form.Control type="text" placeholder='Card number'/>
      </Form.Group>

      <Form.Group className='d-flex'>
<div className='d-fex flex-col'>
        <Form.Label>Expiration date</Form.Label>
        <Form.Control type="text" placeholder="Expiration date" />
        <Form.Label>Security code</Form.Label>
        <Form.Control type="text" placeholder="Security code" />
        </div>
        </Form.Group>
      

      
      








  {/* chechout */}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button onClick={handlePay} variant="warning" type="submit">
        Buy
      </Button>
    </Form>

    <ListGroup className="d-flex flex-column align-items-end justify-content-center mx-5 p-10" style={{maxHeight: '42rem', position: 'absolute',top: '0', left: '38rem', zIndex: '1', boxSizing: 'border-box'}} >
    <div style={{width: '45rem', height: '40rem', overflowY: 'scroll'}}>
                  {cartProducts.map((cartProduct) => (
                    <ListGroup.Item
                      key={cartProduct.id}
                      as="li"
                      style={{ height: "13rem", width: "44rem", boxSizing: 'border-box', marginTop: '0'}}
                      className="d-flex justify-content-between align-items-start"
                    >
                      <img src={cartProduct.image} className="w-25 h-100" />
                      <div className="fw-bold mx-4 flex-grow-1">
                        <p>{cartProduct.title}</p>
                        <p className="">
                          Price: {cartProduct.price.toFixed(2)}€
                        </p>
                      </div>

                    </ListGroup.Item>
                  ))}
                  <div className="bg-white w-100">
                    
                    <p className="bg-warning w-100 fw-bold text-uppercase fs-6">Total: {total.toFixed(2)}</p>
                  </div>
                  </div>
                </ListGroup>




    </div>
    </div>
    

        </>
    )

}

export default Payment