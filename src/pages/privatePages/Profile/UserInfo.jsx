import React from 'react'
import profil from '../../../assets/icons/profile-circle.svg'
import close from '../../../assets/icons/close-circle.svg'
import pen from '../../../assets/icons/magicpen.svg'

function UserInfo() {
  return (
    <div className="mt-12 px-28 ">
      <div className="flex mb-8">
        <h1 className="text-md font-semibold mr-7">Личные данные</h1>
        <h1 className="text-md font-semibold text-gray-100">Уведомление</h1>
      </div>
      <div className=" border border-solid rounded-[10px]  border-gray-300 p-8">
        <div className="flex items-center">
          <div className="relative ">
            <img src={profil} alt="" />
            <img
              className="absolute right-1 bottom-1.5 z-10 rounded-full border-[white] border-1 bg-white-100 cursor-pointer"
              src={close}
              alt=""
            />
          </div>
          <h1 className="text-md font-semibold ml-6">Имя не указано</h1>
          <img className="ml-3 cursor-pointer" src={pen} alt="" />
        </div>
        <div className="flex w-2/3 justify-between mt-9 ">
          <div>
            <div className="flex  ">
              <h1 className="text-base text-gray-100   ">E-mail</h1>
              <img className="ml-3 mb-2 cursor-pointer" src={pen} alt="" />
            </div>
            <h1 className="text-base font-bold ">Не указано</h1>
          </div>
          <div>
            <div className="flex">
              <h1 className="text-base text-gray-100 ">Номер телефона</h1>
              <img className="ml-3 cursor-pointer" src={pen} alt="" />
            </div>
            <h1 className="text-base font-bold mt-2">+998 99 123 45 67</h1>
          </div>
          <div>
            <h1 className="text-base text-gray-100 mb-2 ">Пол</h1>
            <div className="flex">
              <div className="flex items-center">
                <div className="h-6 w-6 border-[5px] solid rounded-full border-blue-300 mr-2.5 cursor-pointer ">
                  {/* <input
                    className=" h-full w-full  mb-10 absolute right-0"
                    type="radio"
                    name="rad"
                  /> */}
                </div>
                <p className="text-base font-bold mr-5 "> Муж.</p>
              </div>
              <div className="flex items-center">
                <div className="h-6 w-6 border-[5px] solid rounded-full border-blue-300 mr-2.5 cursor-pointer ">
                  {/* <input
                    className=" h-full w-full absolute left-0"
                    type="radio"
                    name="rad"
                  /> */}
                </div>
                <p className="text-base font-bold"> Жен.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
