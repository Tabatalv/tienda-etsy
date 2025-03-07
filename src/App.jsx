import React, { useState , useEffect} from 'react'
import './App.css'

function App() {
  const [datos, setDatos] = useState(null)
  const [error, setError] = useState(null)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    .then(respuesta =>respuesta.json())
    .then(respuesta => {
      const cosmeticos = respuesta.map(producto => {
        return {
          id: producto.id,
          name:producto.name,
          description:producto.description,
          image_link:producto.image_link,
          price:producto.price,
        }
      })
      setProductos(cosmeticos)
    } 

    )
  }, [])

  if(error) return <p>Cargando</p>



  return (
    <>
      <h1>Productos</h1>
    
      {productos.map(producto => (
        <div key={producto.id}>
          <h2>{producto.name}</h2>
          <p>{producto.description}</p>
          <img src={producto.image_link} alt={producto.name} />
        </div>
      ))}
      )
    </>
  )
}

export default App
