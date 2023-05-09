import React from 'react'
import compbg from '../../../assets/images/product_1.png'

function Homebannerright() {
  return (
    <div className=" col-span-1  ">
      <h5 className="text-md text-black font-semibold mb-8">Товары дня</h5>
      <div className=" h-[500px] pt-14 pb-20  px-16 border-0 bg-white-300 r rounded-lg  inline-block text-center  hover:shadow-lg  ">
        <img src={compbg} alt="" />
        <p className=" font-normal text-thin  ">
          MacBook Pro 13 inch 8/256/A2338
        </p>
        <span className=" font-md text-black mt-2.5 font-semibold block ">
          14 000 000 сум
        </span>
        <div className=" mt-5 flex justify-center gap-4  ">
          <i className="fa fa-angle-left text-white-100 hover:text-black bg-blue-400 inline py-3 px-4 rounded hover:shadow-xl "></i>
          <i className="fa fa-angle-right text-white-100 hover:text-black bg-blue-400 inline py-3 px-4  rounded hover:shadow-xl"></i>
        </div>
      </div>
    </div>
  )
}

export default Homebannerright
