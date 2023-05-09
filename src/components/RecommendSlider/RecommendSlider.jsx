/* eslint-disable prettier/prettier */
/* eslint-disable import/no-duplicates */
import React from 'react'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import {Navigation} from 'swiper'
// import ShoppingCart from '../../assets/icons/shopping-cart.svg'
// import Heart from '../../assets/icons/heart.svg'
import UniversalBtn from '../UniversaBtn/Universalbtn'
import Buy from '../../assets/icons/shopping-cart.svg'
import heart from '../../assets/icons/heart.svg'

export default function RecommendSlider({
  image,
  id,
  title,
  price,
  salePrice,
  discount,
}) {
  return (
    <div className="p-5 bg-white-300 rounded ">
      <img className="mb-4" src={image} alt="" />
      <span className="text-xs text=[12] text-white-300 p-2 bg-red-200 rounded">
        {discount} скидка
      </span>
      <p className="text-black my-2.5 ">{title}</p>
      {price === '' ? (
        <div className="my-2.5"></div>
      ) : (
        <h6 className="text-gray-100 line-through">{price}</h6>
      )}
      <h6 className="text-blue-200 mb-5" style={{fontSize: '24px'}}>
        {salePrice}
      </h6>
      <div className="btns cardBottom flex whitespace-nowrap justify-between pt-[10px] border-t-[1px]">
        <UniversalBtn icon={Buy} className="mr-2.5 ">
          <img className="mr-2.5" src={Buy} alt="" />В корзину
        </UniversalBtn>
        <img
          className="p-2 border border-white-200 rounded rounded-2 ml-5"
          src={heart}
          alt=""
        />
      </div>
    </div>
  )
}
