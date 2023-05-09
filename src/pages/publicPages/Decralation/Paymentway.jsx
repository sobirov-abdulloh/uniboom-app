import React from 'react'

function Paymentway() {
  return (
    <div className="my-10">
      <h5 className="font-semibold text-md text-black-100"> Способы оплаты</h5>
      <div className=" w-fit grid grid-cols-2 gap-5">
        <div className=" w-96 flex gap-4 items-center border rounded-md   py-4 pl-8 mt-5 ">
          <p className="rounded-full border border-gray-200 w-6 h-6 hover:border-blue-300 hover:border-[5px] cursor-pointer"></p>
          <h2 className="font-bold text-base text-black-100">
            Оплата через Payme
          </h2>
        </div>
        <div className="  w-96 flex gap-4 items-center border rounded-md    py-4 pl-8 mt-5 ">
          <p className="rounded-full border border-gray-200 w-6 h-6 hover:border-blue-300 hover:border-[5px] cursor-pointer"></p>
          <h2 className="font-bold text-base text-black-100">
            Оплата по карте HUMO и UZCARD
          </h2>
        </div>
        <div className="  w-96 flex gap-4 items-center border rounded-md    py-4 pl-8 mt-5 ">
          <p className="rounded-full border border-gray-200 w-6 h-6 hover:border-blue-300 hover:border-[5px] cursor-pointer "></p>
          <h2 className="font-bold text-base text-black-100 ">
            Оплата по карте HUMO и UZCARD
          </h2>
        </div>
        <div className="  w-96 flex gap-4 items-center border rounded-md    py-4 pl-8 mt-5 ">
          <p className="rounded-full border border-gray-200 w-6 h-6 hover:border-blue-300 hover:border-[5px] cursor-pointer "></p>
          <h2 className="font-bold text-base text-black-100">
            Оплатить картой при получении
          </h2>
        </div>
        <div className="  w-96 flex gap-4 items-center border rounded-md   py-4 pl-8 mt-5 ">
          <p className="rounded-full border border-gray-200 w-6 h-6 hover:border-blue-300 hover:border-[5px] cursor-pointer "></p>
          <h2 className="font-bold text-base text-black-100">Оплата картой</h2>
        </div>
      </div>
    </div>
  )
}

export default Paymentway
