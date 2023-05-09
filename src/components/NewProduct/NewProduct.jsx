import React from 'react'
// import Heart from '../../assets/icons/heart.svg'
/* eslint-disable import/no-duplicates */
/* eslint-disable prettier/prettier */
import {useNavigate} from 'react-router-dom'
import ShoppingCart from '../../assets/icons/shopping-cart.svg'
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
  const navigate = useNavigate()

  const getDetail = () => {
    navigate(`/productDetail/${id}`)
  }

  return (
    <div className="p-5 bg-white-300 rounded ">
      <img onClick={getDetail} className="mb-4" src={image} alt="" />
      <span className="text-xs text=[12] text-white-300 p-2 bg-red-200 rounded">
        {discount} скидка
      </span>
      <p className="text-black my-2.5 h-[48px]">{title}</p>
      {price === '' ? (
        <div className="my-2.5"></div>
      ) : (
        <h6 className="text-gray-100 line-through">{price}</h6>
      )}
      <h6 className="text-blue-200 mb-5" style={{fontSize: '24px'}}>
        {salePrice}
      </h6>
      <div className="btns cardBottom flex whitespace-nowrap justify-between pt-[10px] border-t-[1px]">
        <UniversalBtn icon={Buy} className="mr-2.5">
          <img className="mr-2.5" src={ShoppingCart} alt="" />В корзину
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
