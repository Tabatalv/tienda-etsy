import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header.jsx'
import Products from './Products/Products.jsx'
import Payment from './Payment/Payment'

function App() {
  const [cartProducts, setCartProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [payment, setPayment] = useState(false)
  const [pay, setPay] = useState(false)

  return (
    <>
    {pay && (
      <p className='text-white text-center w-100 h-75  fs-4 bg-success'>¡Products bought succesfully!</p>
    )}
  
      <Header cartProducts={cartProducts} setCartProducts={setCartProducts} total={total} setTotal={setTotal} setPayment={setPayment}/>
      {payment && (
        <Payment cartProducts={cartProducts} setCartProducts={setCartProducts} setTotal={setTotal} total={total} setPayment={setPayment} setPay={setPay}/>
      )}
      <Products cartProducts={cartProducts} setCartProducts={setCartProducts} setTotal={setTotal} setPay={setPay}/>
    
    </>
    
  
  )
}

export default App
