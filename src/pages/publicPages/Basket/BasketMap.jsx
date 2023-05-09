import React, {useState} from 'react'

function BasketMap({image, id, title, price, salePrice}) {
  const [count, setcount] = useState(1)
  return (
    <div className="grid grid-cols-[40%,30%,30%]  mt-4  last:border-none    border-b-2 border-solid border-gray-200 pb-4   ">
      <div className="flex   ">
        <input type="checkbox" />
        <img className="w-28 h-24 ml-4" src={image} alt="" />
        <div className="ml-4">
          <h2 className="font-raleway  not-italic  font-bold text-base text-black  ">
            {title}
          </h2>
          <h2 className="flex">
            <span className="font-raleway not-italic font-normal text-gray-200 text-base">
              Цвет:
            </span>
            <span className="font-raleway not-italic font-normal text-gray-100 text-base ml-1">
              Pacific Blue
            </span>
          </h2>
          <h2 className="flex">
            <span className="font-raleway not-italic font-normal text-gray-200 text-base">
              Магазин:
            </span>
            <span className="font-raleway not-italic font-normal text-gray-100 text-base ml-1">
              MacBro
            </span>
          </h2>
        </div>
      </div>
      <div className="flex  items-start  justify-end ">
        <button
          onClick={() => count > 1 && setcount(count - 1)}
          className="bg-blue-200 flex items-center justify-center flex-col text-md w-10 h-10  text-white-300  rounded"
        >
          <span>-</span>
        </button>
        <div className="border border-solid h-10 w-10 flex items-center justify-center border-gray rounded  mx-3  ">
          <span className="text-base font-bold text-black">{count}</span>
        </div>
        <button
          onClick={() => setcount(count + 1)}
          className="bg-blue-200 flex items-center justify-center flex-col text-md w-10 h-10  text-white-300  rounded"
        >
          <span>+</span>
        </button>
      </div>
      <div className=" flex justify-start items-start  ml-52   ">
        <div className=" flex text-md  text-black  ">
          <h1 className=" ">
            {salePrice ? (
              <h1 className="font-raleway not-italic   font-semibold text-md">
                {salePrice}
              </h1>
            ) : (
              <h1 className="font-raleway not-italic  font-semibold text-md">
                {price}
              </h1>
            )}
          </h1>
          <span className="font-raleway not-italic  font-bold text-base ml-1 flex  items-end ">
            сyм
          </span>
        </div>
      </div>
    </div>
  )
}

export default BasketMap
