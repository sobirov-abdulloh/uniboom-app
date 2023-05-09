import React from 'react'
import Vector2 from '../../../../assets/icons/Vector (2).svg'
import Vector from '../../../../assets/icons/Vector (1).svg'

function FeedBacksBottom() {
  return (
    <div className="flex items-center">
      <button className=" mr-3 flex items-center bg-blue-400 px-4 py-3 rounded my-10 h-10">
        <img src={Vector} alt="" />
      </button>
      <button className=" mr-3  flex items-center bg-blue-200 px-4 py-3 rounded my-10 text-white-100 h-10">
        1
      </button>
      <button className=" mr-3  flex items-center border border-solid border-gray-100 px-4 py-3 rounded h-10 my-10 text-gray-100">
        2
      </button>
      <button className=" mr-3  flex items-center border border-solid border-gray-100 px-4 py-3 rounded h-10 my-10 text-gray-100">
        3
      </button>
      <button className=" flex items-center  bg-blue-200  py-3 px-4 rounded h-10">
        <span className="  font-normal text-base text-white-100">
          Следующее
        </span>
        <img className="ml-4" src={Vector2} alt="" />
      </button>
    </div>
  )
}

export default FeedBacksBottom
