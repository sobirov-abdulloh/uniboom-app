import React from 'react'
import HeaderBottom from './HeaderBottom.jsx'
import HeaderTop from './HeaderTop.jsx'

function Header() {
  return (
    <div className="w-full bg-white-300">
      <HeaderTop />
      <HeaderBottom />
    </div>
  )
}

export default Header
