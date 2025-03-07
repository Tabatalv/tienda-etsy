import React, { useState , useEffect} from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header.jsx'
import Products from './Products/Products.jsx'

function App() {
  
  return (
    <>
    <Header/>
      <Products/>
    </>
  )
}

export default App
