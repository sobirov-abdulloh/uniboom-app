import React from 'react'

function RegistrForm() {
  return (
    <div>
      <form className="flex flex-col items-center rounded bg-white-300 w-[27rem]  m-auto  mt-12 h-[31rem] justify-between p-8 ">
        <h1 className="text-md font-semibold self-start">
          Зарегистрируйтесь в системе
        </h1>
        <input
          className="border rounded outline-none text-base py-4 px-5 w-full border-gray-200"
          type="text"
          placeholder="Ваш номер телефона"
        />
        <input
          className="border rounded outline-none text-base py-4 px-5 w-full border-gray-200"
          type="text"
          placeholder="Пароль"
        />
        <input
          className="border rounded outline-none text-base py-4 px-5 w-full border-gray-200 "
          type="text"
          placeholder="Подтвердить пароль"
        />
        <div className="flex items-center ">
          <div className="mr-2 w-5 h-5 border border-gray-200 rounded border-solid cursor-pointer">
            <input className="cursor-pointer w-full h-full " type="checkbox" />
          </div>
          <label htmlFor="" className=" w-[21.5rem] text-xs ">
            Я согласен с
            <span className="text-blue-200 cursor-pointer">
              политикой конфиденциальности
            </span>
            и<span className="text-blue-200 cursor-pointer"> условиями </span>
            пользование.
          </label>
        </div>
        <button className="bg-blue-200 rounded w-full py-2 text-white-300">
          Войти
        </button>
        <p className="text-blue-200 text-xs self-start ">Уже есть аккаунт</p>
      </form>
    </div>
  )
}

export default RegistrForm
