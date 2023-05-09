import React from 'react'
import CatalogItem from './CatalogItem.jsx'
import CatalogSidebar from './CatalogSidebar.jsx'

function Catalog() {
  return (
    <div className="flex ">
      <CatalogSidebar />
      <CatalogItem />
    </div>
  )
}

export default Catalog
