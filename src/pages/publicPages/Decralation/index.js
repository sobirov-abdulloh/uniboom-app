import {number} from 'prop-types'
import React from 'react'
import DeclarationRight from './DeclarationRight.jsx'
import DeclationLeft from './DeclationLeft.jsx'

function Declaration() {
  const products = [
    {name: 'Olma', price: '12000', id: 1},
    {name: 'Banan', price: '305,00', id: 2},
    {name: 'Uzum', price: '13000', id: 3},
    {name: 'Xurma', price: '10,000', id: 4},
    {name: 'Apelsin', price: '2 5000', id: 5},
    {name: 'Limon', price: '5000', id: 6},
    {name: 'Limon', price: '5,000', id: 7},
    {name: 'Limon', price: '5000', id: 8},
    {name: 'Limon', price: '5000', id: 9},
  ]
  const sumMap = products.map(item => Number(item.price.replaceAll(' ', '')))
  const sum = sumMap.reduce((b, a) => b + a)
  console.log(sum)
  return (
    <div className=" gap-6 h-full grid grid-cols-4 py-8">
      {/* <DeclationLeft />
      <DeclarationRight /> */}
    </div>
  )
}

export default Declaration
