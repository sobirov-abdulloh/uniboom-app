import React from 'react'
import Vector2 from '../../assets/icons/arrow-down.svg'
import global from '../../assets/icons/global.png'

function HeaderTop() {
  return (
    <div className="flex items-center  justify-between px-24 h-[50px] py-1 ">
      <div className="flex items-center  ">
        <img src={global} alt="" className="pr-1 object-cover" />
        <p className="px-1 text-base">Русский</p>
        <img src={Vector2} alt="nnnnn" className="text-gray-100" />
        <p className="text-base text-gray-100 ml-10">Магазины</p>
      </div>
      <div className="right flex">
        <p className="mr-6 text-base text-gray-100"> +99 899 999-99-99</p>
        <p className="text-base text-gray-100">Связаться с нами</p>
      </div>
    </div>
  )
}

export default HeaderTop
