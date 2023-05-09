import React from 'react'

function Button({children}) {
  return (
    <button className="py-2 pl-[18px] pr-4 bg-blue-200 rounded flex text-white-300">
      {children}
    </button>
  )
}
export default Button
