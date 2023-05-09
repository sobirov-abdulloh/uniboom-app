import React from 'react'

function ZakazMao({img, title, prise, number}) {
  return (
    <div className="grid grid-cols-8 items-center mb-5">
      <div className="flex col-span-4 items-center">
        <img src={img} alt="..." />
        <h1 className="font-bold text-base">{title}</h1>
      </div>
      <div className="col-span-2 text-center ">
        <p className="font-bold text-base inline-block border border-solid border-gray-200 py-2 px-4 rounded">
          {number}
        </p>
      </div>
      <h1 className="col-span-2 font-semibold text-md text-right pr-12">
        {prise}
        <span className="font-bold text-base">сум</span>
      </h1>
    </div>
  )
}

export default ZakazMao
