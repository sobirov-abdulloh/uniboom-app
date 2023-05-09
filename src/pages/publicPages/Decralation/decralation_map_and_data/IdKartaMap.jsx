import React from 'react'
import download from '../../../../assets/icons/document-upload.svg'

function IdKartaMap({img, title, text}) {
  return (
    <div className="border border-solid border-gray-300 rounded-lg flex flex-col justify-between w-1/4 items-center p-4 h-[35rem] mr-5">
      <div>
        <img src={img} className="w-full" alt="..." />
        <h1 className="font-bold text-base my-4">{title}</h1>
        <p className="text-base text-gray-100 ">{text}</p>
      </div>
      <div className="flex">
        <img src={download} alt="..." />
        <p className="text-base ml-3">Загрузить</p>
      </div>
    </div>
  )
}

export default IdKartaMap
