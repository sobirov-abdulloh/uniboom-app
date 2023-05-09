import React from 'react'
import {Link} from 'react-router-dom'

function FooterMainTexts({name, links}) {
  return (
    <div className="mb-6">
      <h5 className="uppercase font-bold mb-2.5 text-black">{name}</h5>

      <ul className="list-none mb-0 p-2">
        {links.map(item => (
          <li key={item.text} className=" text-gray-100 py-5">
            <Link to={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterMainTexts
