import React from 'react'
import {productSpecs} from './productInfoDatas'
import ProductSpecs from './productSpecs'

function ProductDescription() {
  return (
    <div className="py-8">
      {productSpecs.map(productSpec => (
        <ProductSpecs {...productSpec} key={productSpec.id} />
      ))}
      <button className="text-blue-200 text-md">Показать меньше</button>
    </div>
  )
}

export default ProductDescription
