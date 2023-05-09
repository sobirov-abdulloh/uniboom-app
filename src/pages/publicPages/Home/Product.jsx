import React from 'react'
import {useNavigate} from 'react-router-dom'

function Product({id, title, discount, price, image}) {
  const navigate = useNavigate()
  const getId = () => {
    navigate(`/productDetail/${id}`)
  }
  return (
    <div
      style={{
        border: '2px solid gray',
        marginBottom: '10px',
        backgroundColor: 'yellow',
      }}
    >
      <h1>{title}</h1>
      <h3>{price}</h3>
      <p>{discount}</p>
      <button className="bg-blue-100" onClick={getId}>
        enter
      </button>
    </div>
  )
}

export default Product
