import React from 'react'
import magicpen from '../../../../assets/icons/magicpen (1).svg'

function FeedBacksTop() {
  return (
    <div className="pt-12 ">
      <div>
        <button className="text-base  font-normal  text-gray-100 bg-white-200 rounded px-4 py-2 mr-5">
          Все характеристики товара
        </button>
        <button className="text-base  font-normal  text-white-300 bg-blue-200 rounded px-4 py-2">
          Отзывы покупателей
        </button>
      </div>
      <div className="flex items-center mt-7 justify-between">
        <h2 className="  font-bold text-base">
          Здесь пока нет комментарий, будьте первыми!
        </h2>
        <button className=" bg-blue-200 rounded px-4 py-2 flex ">
          <img className="mr-3" src={magicpen} alt="" />
          <span className="text-base  font-normal  text-white-300">
            Оставить отзыв
          </span>
        </button>
      </div>
    </div>
  )
}

export default FeedBacksTop
