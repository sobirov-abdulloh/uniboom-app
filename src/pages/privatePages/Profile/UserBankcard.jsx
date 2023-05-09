import React from 'react'
import add from '../../../assets/icons/add-circle.svg'

function UserBankcard() {
  return (
    <div className="mt-10 px-28 mb-12 cursor-pointer">
      <div className="border border-solid rounded-[10px] border-gray-300 w-[21rem] h-[11rem] flex flex-col items-center ">
        <img className="mt-11 " src={add} alt="" />
        <h1 className="text-md font-semibold text-blue-200 items-center mt-5">
          Банковские карты
        </h1>
      </div>
    </div>
  )
}

export default UserBankcard
