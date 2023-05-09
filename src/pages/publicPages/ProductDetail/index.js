import React from 'react'
import Noutbook from '../../../assets/images/favorite_1.png'
import Heart from '../../../assets/icons/heart.svg'
import Shop from '../../../assets/icons/shopping-cart-white.svg'
import ProductDeteilMap from './ProductDeteilMap.jsx'
import ProductDeteilSozlar from './ProductDeteilSozlar.jsx'
import ProductDeteilUsloviya from './ProductDeteilUsloviya.jsx'
import {productDeteilMap} from '../../../datas/productDeteilMap'
import ProductDescription from './productDescription'
import {moreProduct} from './productData'
import ProductDetailInfo from './ProductDetailInfo.jsx'
import FeedBacksTop from './Feedbacks/FeedBacksTop.jsx'
import FeedBacksCenter from './Feedbacks/FeedBacksCenter.jsx'
import FeedBacksBottom from './Feedbacks/FeedBacksBottom.jsx'

function ProductInfo() {
  return (
    <div className=" py-8">
      <div className="">
        <h3 className="text-gray-200 w-1/4 text-base font-normal flex justify-between ">
          <span>Каталог товаров</span> / <span>Электроника</span>
          <span className="text-black-200 font-bold">Ноутбуки</span>
        </h3>
        <h1 className="text-md font-semibold">
          Ноутбук Apple Macbook Air 13 2020 / M1 / 8GB / 256GB / Apple graphics
          7-core, серебристый
        </h1>
        <h3 className="my-5 text-base font-bold">
          Магазин: <span className="text-blue-300">BSB STORE</span>
        </h3>
      </div>
      <div className="grid grid-flow-col auto-cols-auto gap-x-6  grid-rows-4">
        <div className="grid grid-cols-6  row-span-4 ">
          <div className="flex flex-col">
            {productDeteilMap.noutbook.map((item, index) => (
              <ProductDeteilMap key={index} item={item} />
            ))}
          </div>
          <div className="col-span-5 ml-5 border border-solid border-gray-300 rounded-xl">
            <img
              src={Noutbook}
              alt="..."
              className="w-full h-full object-cover  rounded-xl"
            />
          </div>
        </div>
        <div className="bg-white-300 border border-solid border-gray-200 py-5 px-7 rounded-xl row-span-3">
          <div className="flex justify-between ">
            <div>
              <p className=" font-semibold text-md pb-5 ">Коротко о продукте</p>
              <h2>О продукте</h2>
              <div className=" font-normal text-gray-100 text-base">
                {productDeteilMap.productHaqida.sozOn.map((item, index) => (
                  <ProductDeteilSozlar key={index} item={item} />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-end text-right ">
              {productDeteilMap.productHaqida.sozChap.map((item, index) => (
                <ProductDeteilSozlar key={index} item={item} />
              ))}
            </div>
          </div>
          <h3 className="text-center text-base font-bold text-blue-200">
            Все характеристики
          </h3>
        </div>
        <div className="row-span-4 w-[28rem]">
          <div className="rounded-xl border border-solid px-5 py-7 ">
            <div className="flex justify-between items-center">
              <h2>
                25 000 000 <span>сум</span>
              </h2>
              <img
                src={Heart}
                alt="...."
                className="border border-solid rounded p-1"
              />
            </div>
            <button className="bg-blue-300 my-5  text-white-100 flex items-center py-2 w-full justify-center font-normal text-base rounded">
              <img src={Shop} alt="..." />
              Добавить в корзину
            </button>
            <button className="border border-solid border-blue-300 text-blue-300 py-2 w-full text-base font-normal rounded">
              Купить сейчас
            </button>
          </div>
          <div className="flex flex-col border border-solid rounded-xl p-5">
            <button className="font-normal text-base bg-[#ECECEC] rounded py-2 mb-5">
              По <span className="font-bold">2 500 000</span> сум / на
              <span className="font-bold">12</span> мес.
            </button>
            <button className="bg-blue-200 text-base font-normal py-2 rounded text-white-100">
              Купить в рассрочку
            </button>
          </div>
          <div className="grid grid-cols-2 mt-5 ">
            <div className="flex flex-col justify-between">
              {productDeteilMap.usluga.uslugaOn.map((item, index) => (
                <ProductDeteilUsloviya key={index} {...item} />
              ))}
            </div>
            <div className="font-bold text-right">
              {productDeteilMap.usluga.uslugaChap.map((item, index) => (
                <ProductDeteilSozlar key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProductDescription className="bg-white-100" />

      <div className=" mt-14 ">
        <h3 className="font-semibold text-md text-black-100">
          Этот товар в других магазинах
        </h3>
        <div>
          {moreProduct.map(item => (
            <ProductDetailInfo key={item.id} {...item} />
          ))}
        </div>
        <div className="w-3/4">
          <FeedBacksTop />
          <FeedBacksCenter />
          <FeedBacksBottom />
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
