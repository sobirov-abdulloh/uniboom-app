import React from 'react'

function ProductDeteilUsloviya({text, img}) {
  return (
    <h2 className="flex text-base font-normal">
      <img src={img} alt="..." />
      {text}
    </h2>
  )
}

export default ProductDeteilUsloviya
