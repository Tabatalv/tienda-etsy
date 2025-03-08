import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header.jsx'
import Products from './Products/Products.jsx'

function App() {
  const [cartProducts, setCartProducts] = useState([])
  const [total, setTotal] = useState(0)
  return (
    <>
    <Header cartProducts={cartProducts} setCartProducts={setCartProducts} total={total} setTotal={setTotal}/>
      <Products cartProducts={cartProducts} setCartProducts={setCartProducts} setTotal={setTotal}/>
    </>
  )
}

export default App
