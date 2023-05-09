import React from 'react'
import {catalogs} from '../../../datas/catalog'
import CatalogSidebarMap from './CatalogSidebarMap.jsx'

function CatalogSidebar() {
  return (
    <div className="w-96 bg-white-300 p-7 ">
      {catalogs.map((item, index) => (
        <CatalogSidebarMap key={item.id} item={item} index={index} />
      ))}
    </div>
  )
}

export default CatalogSidebar
