import React from 'react'

function ProductDetailInfo({brandName, price, installment}) {
  return (
    <div className="flex justify-between   border-b border-dotted  w-4/5 items-center ">
      <h5 className="font-bold text-base text-black-100 mt-9   col-span-2 ">
        {brandName}
      </h5>

      <div className=" mt-9  flex items-center col-span-2 mb-4  text-black font-bold">
        <p className=" mr-10 font-bold text-base text-black-100 ">{price}</p>
        <span className="text-gray-100 mr-2.5 text-base font-normal">
          B рассрочку по
        </span>
        <h4 className=" font-bold text-base text-black-100"> {installment}</h4>

        <span className="text-gray-100 ml-2.5 mr-12 text-base font-normal">
          x18 месяцев
        </span>
        <button className="text-base font-normal text-white-100 bg-blue-200 py-2 px-4 inline rounded">
          Посмотреть
        </button>
      </div>
    </div>
  )
}

export default ProductDetailInfo
