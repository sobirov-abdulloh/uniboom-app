import React from 'react'
import IdKarta from './IdKarta.jsx'
import Zakaz from './Zakaz.jsx'
import Paymentway from './Paymentway.jsx'

function DeclationLeft() {
  return (
    <div className=" px-4 py-6 col-span-3 border border-gray-200 border-opacity-30 rounded">
      <h1 className="font-bold text-lg text-black-100 mb-10">
        Оформления покупки
      </h1>
      <h5 className="font-semibold text-black-100 text-md mb-5">Ваши данные</h5>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          name="lName"
          id="lName"
          placeholder="Ваш телефон*"
          class=" rounded border max-w-[440px] bg-white py-4 pl-5 pr-60 text-base font-normal text-gray-100 outline-none  "
        />

        <div className=" flex gap-4">
          <input
            type="text"
            name="lName"
            id="lName"
            placeholder="Ваша имя*"
            class=" rounded border  max-w-[440px] bg-white py-4 pl-5 pr-60 text-base font-normal text-gray-100 outline-none  "
          />
          <input
            type="text"
            name="lName"
            id="lName"
            placeholder="Ваша Фамилия*"
            class=" rounded border  max-w-[440px] bg-white py-4 pl-5 pr-60 text-base font-normal text-gray-100 outline-none  "
          />
        </div>
      </div>
      <Zakaz />
      <Paymentway />
      <IdKarta />
    </div>
  )
}

export default DeclationLeft
