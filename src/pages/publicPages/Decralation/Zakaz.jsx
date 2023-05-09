import React from 'react'
import {decralationData} from './decralation_map_and_data/decralationData'
import ZakazMap from './decralation_map_and_data/ZakazMap.jsx'

function Zakaz() {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1 className="font-semibold text-md">Ваш заказ</h1>
        <p className="text-base text-gray-100">Изменить</p>
      </div>
      <div>
        {decralationData.zakazData.map((item, index) => (
          <ZakazMap key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Zakaz
