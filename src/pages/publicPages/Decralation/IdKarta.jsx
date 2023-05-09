import React from 'react'
import IdKartaMap from './decralation_map_and_data/IdKartaMap.jsx'
import {decralationData} from './decralation_map_and_data/decralationData'

function IdKarta() {
  return (
    <div>
      <h1 className="font-semibold text-md mb-5">
        Прикрепите фото паспорта или ID карты
      </h1>
      <div className="flex">
        {decralationData.IdKartaData.map((item, index) => (
          <IdKartaMap key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default IdKarta
