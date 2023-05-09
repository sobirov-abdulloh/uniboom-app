import React from 'react'

function Button({className, children}) {
  return (
    <button className={`${className} py-2 px-4 rounded mb-2 flex items-center`}>
      {children}
    </button>
  )
}

export default Button
