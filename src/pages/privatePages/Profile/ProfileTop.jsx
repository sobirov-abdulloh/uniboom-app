import React from 'react'
import heart from '../../../assets/icons/heart.svg'
import like from '../../../assets/icons/like.svg'
import profile from '../../../assets/icons/profile-circle (2).svg'
import shop from '../../../assets/icons/bag-2.svg'
import home from '../../../assets/icons/home-2.svg'

function ProfileTop() {
  return (
    <div className="flex w-1/2 justify-between items-center px-28 mt-14">
      <h1 className="text-base flex ">
        <img className="mr-4" src={home} alt="" />
        Главное
      </h1>

      <h1 className="text-base flex ml-16 ">
        <img className="mr-4" src={heart} alt="" /> Избранное
      </h1>

      <h1 className="text-base flex ml-16 ">
        <img className="mr-4" src={shop} alt="" />
        Покупки
      </h1>

      <h1 className="text-base flex ml-16 ">
        <img className="mr-4" src={like} alt="" />
        Отзывы
      </h1>

      <h1 className="text-base flex ml-16  ">
        <img className="mr-4" src={profile} alt="" />
        Профиль
      </h1>
    </div>
  )
}

export default ProfileTop
