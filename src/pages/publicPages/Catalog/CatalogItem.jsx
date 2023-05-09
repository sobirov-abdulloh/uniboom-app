import React from 'react'
import {catalogs} from '../../../datas/catalog'
import CatalogItemMap from './CatalogItemMap.jsx'

function CatalogItem() {
  const filter = catalogs.filter(elm => elm.id === 1)
  return (
    <div className="py-10 w-full pl-24">
      {filter.map(item => (
        <CatalogItemMap key={item.id} {...item} />
      ))}
    </div>
  )
}

export default CatalogItem
