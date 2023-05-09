import React from 'react'
import {products} from '../../../datas/products'
import BasketMap from './BasketMap.jsx'
import BasketTotalSkore from './BasketTotalSkore.jsx'

function BasketCard() {
  return (
    <div>
      <h1 className="font-raleway not-italic font-bold text-lg text-black my-8">
        Корзина
      </h1>
      <div className="grid grid-cols-[75%,25%] mt-4">
        <div className="border border-solid border-gray-200 p-2 rounded-lg mr-10">
          <div className="flex justify-between  pl-4 pr-3 pt-3">
            <div className="flex">
              <input type="checkbox" />
              <h1 className="ml-3 font-raleway  not-italic font-semibold text-md text-black">
                Выбрать вс
              </h1>
            </div>
            <button className="font-raleway not-italic font-bold text-base text-black">
              Удалить
            </button>
          </div>
          <div className="pl-4 pr-8">
            {products.map(item => (
              <BasketMap key={item.id} {...item} />
            ))}
          </div>
        </div>
        <BasketTotalSkore />
      </div>
    </div>
  )
}

export default BasketCard
