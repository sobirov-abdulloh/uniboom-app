import React from 'react'

function DeclarationRight() {
  return (
    <div className="col-span-1 h-72 px-6 py-4 border border-gray-200 border-opacity-30 rounded-lg ">
      <div className=" flex gap-8 items-center">
        <h1 className="font-bold text-lg  text-black-100">Итого:</h1>
        <h2 className="text-blue-200 font-semibold text-md">
          29 780 000
          <span className="  text-base font-bold text-black-100 ml-1">сум</span>
        </h2>
      </div>
      <h3 className="font-bold text-base text-gray-100 mt-8 mb-8">
        Товары 4 шт.
      </h3>
      <h5 className=" px-28 py-2 bg-blue-200 mb-8  rounded text-base font-normal text-white-300">
        Оформить заказ
      </h5>
      <div className="flex gap-2 items-center ">
        <span className="rounded w-6 h-6  border  border-gray-200  px-3 inline"></span>
        <h4 className="font-normal text-xs ">
          Согласен c условиями правил пользования торговой площадкой и правилами
          возврата
        </h4>
      </div>
    </div>
  )
}

export default DeclarationRight
