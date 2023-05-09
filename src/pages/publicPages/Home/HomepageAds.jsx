import React from 'react'
import month from '../../../assets/images/month_1.png'

function HomePageAds({bgColor}) {
  return (
    <div
      className={`flex pl-12  ${bgColor} spacing w-full justify-between items-center rounded-md my-12`}
    >
      <div className="flex w-1/2 items-center">
        <h3 className=" text-lg text-white-100 font-extrabold ">
          Ноутбуки в рассрочку
        </h3>
        <h4 className="pl-5 text-md white-500 font-bold">до 12 месяцев</h4>
      </div>
      <div className="">
        <img src={month} alt="rasm.." />
      </div>
    </div>
  )
}

export default HomePageAds
