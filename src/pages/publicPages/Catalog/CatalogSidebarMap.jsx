import React, {useState} from 'react'
import arrowRightGray from '../../../assets/icons/arrow-right-gray.svg'
import arrowRight from '../../../assets/icons/arrow-right.svg'

function CatalogSidebarMap({item}) {
  const [mouseOver, setMouseOver] = useState(false)
  return (
    <div className="flex mb-4">
      <div
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        className="hover:bg-blue-200 cursor-pointer w-80	h-14 flex items-center p-3.5 hover:text-white-300 rounded border-none relative "
      >
        <h3 className="fontSize-base font-bold">{item.catalogName}</h3>
        {mouseOver ? (
          <img className="absolute right-0" src={arrowRight} alt="" />
        ) : (
          <img className="absolute right-0" src={arrowRightGray} alt="" />
        )}
      </div>
    </div>
  )
}

export default CatalogSidebarMap
