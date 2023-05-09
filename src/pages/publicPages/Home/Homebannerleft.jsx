import React from 'react'
import phonebg from '../../../assets/images/slider_1_1.png'

function Homebannerleft() {
  return (
    <div className=" container col-span-3">
      <h5 className="text-md text-black font-semibold">
        Будьте в курсе происходящего
      </h5>
      <div className=" rounded-xl gap-16 h-[500px] max-w-full flex justify-between items-center   p-24 pb-12   bg-[url('/src/assets/images/slider_1.png')] bg-no-repeat bg-center bg-cover mt-8">
        <div className="">
          <h2 className=" mb-4 font-bold text-lg">
            Тяжёлое машиностроение — это вам не песнь светлого будущего
          </h2>
          <span className="text-base font-normal text-black opacity-50  ">
            Вот вам яркий пример современных тенденций — <br /> экономическая
            повестка сегодняшнего дня создаёт.
          </span>
          <button className="py-2 px-4 mt-12 bg-blue-300 rounded text-white-300 shadow hover:shadow-2xl block mb-14">
            Узнать больше
          </button>
          <i className="fa fa-angle-left  mr-2 bg-gray-200 bg-opacity-30 py-3 px-4 rounded hover:shadow-xl"></i>
          <i className="fa fa-angle-right bg-gray-200 bg-opacity-30  py-3 px-4 rounded hover:shadow-xl"></i>
        </div>

        <img className=" h-[500px]" src={phonebg} alt="" />
      </div>
    </div>
  )
}

export default Homebannerleft
