import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search-normal.svg'
import heart from '../../assets/icons/heart.svg'
import cart from '../../assets/icons/shopping-cart.svg'
import menu from '../../assets/icons/menu.svg'

function HeaderBottom() {
  return (
    <div className="flex items-center justify-between  px-24 h-[70px] py-4 border-t border-solid">
      <div className="flex">
        <Link to={'/'}>
          <img className="mr-10" src={logo} alt="" />
        </Link>
        <button className="bg-blue-200 rounded px-4 py-2 text-white-100 mr-12 flex">
          <img className="mr-3" src={menu} alt="" /> Каталог
        </button>
      </div>
      <div className="border-2  px-5 rounded py-2 flex w-1/3 ">
        <input
          placeholder="Поиск товаров"
          className="border-none outline-none w-full bg-white-300"
          type="text"
        />
        <img src={search} alt="" />
      </div>
      <div className="flex ">
        <div className="flex">
          <p className="flex items-center pr-16 text-base">
            <img src={heart} alt="" className="pr-3" />
            Избранные
          </p>
          <Link to="/basket" className="flex items-center text-base ">
            <img src={cart} alt="" className="pr-3" />
            Корзинка
          </Link>
        </div>
        <button className="bg-[transparent] border border-blue-200 px-4 py-2 rounded text-blue-200 ml-11">
          Войти
        </button>
      </div>
    </div>
  )
}
export default HeaderBottom
