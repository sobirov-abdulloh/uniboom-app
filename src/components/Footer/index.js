import React from 'react'
import {categories} from './footerDatas'
import FooterMainTexts from './footerMainTexts'
import FooterRightIcons from './footerRightIcons'

function Footer() {
  return (
    <footer className="bg-white-300  lg:text-left  p-24 pt-12 pb-7">
      <div className="grid desktop:grid-cols-5 tablet:grid-cols-4 justify-center">
        {categories.map(category =>
          !category.icons ? (
            <FooterMainTexts key={category.id} {...category} />
          ) : (
            <FooterRightIcons key={category.id} {...category} />
          ),
        )}
      </div>

      <div className="border-solid border-t-2  text-gray-700 text-center p-4">
        <p className="text-gray-100">UniStore | Все права защищены. 2022</p>
      </div>
    </footer>
  )
}

export default Footer
