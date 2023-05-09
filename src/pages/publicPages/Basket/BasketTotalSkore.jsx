import React from 'react'
import {useNavigate} from 'react-router-dom'

function BasketTotalSkore() {
  const navigate = useNavigate()
  const getDeclaration = () => {
    navigate(`/declaration`)
  }
  return (
    <div className=" border border-solid border-gray-200 rounded-lg   py-3 px-7 h-[290px]">
      <h1 className="flex items-center">
        <span className="font-raleway not-italic font-bold text-lg text-black">
          Итого:
        </span>
        <p className="font-raleway not-italic font-semibold text-md text-blue-200 ml-7 ">
          29 780 000
        </p>
        <span className="font-raleway not-italic font-bold text-base text-black ml-1">
          cyм
        </span>
      </h1>
      <h2 className="flex  font-raleway not-italic font-bold text-base text-gray-100 my-7">
        Товары <p className="mx-1 ">4</p>
        шт.
      </h2>
      <button
        onClick={getDeclaration}
        className="bg-blue-200 py-2 px-24 rounded w-full  font-raleway  font-normal  text-base text-white-300 mb-7"
      >
        Оформить заказ
      </button>
      <div className="flex  ">
        <input type="checkbox" />
        <h2 className="ml-2 text-xs ">
          Согласен с условиями правил пользования торговой площадкой и правилами
          возврата
        </h2>
      </div>
    </div>
  )
}

export default BasketTotalSkore
