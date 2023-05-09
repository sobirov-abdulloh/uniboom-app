import React from 'react'
import {Link} from 'react-router-dom'

function FooterRightIcons({name, links}) {
  return (
    <div className="mb-6">
      <h5 className="uppercase font-bold mb-2.5 text-black">{name}</h5>

      <ul className="list-none flex mb-0 items-center">
        {links.map(item => (
          <li key={item.icon} className="py-5 pr-8">
            <Link to={item.href}>
              <img src={item.icon} alt={item.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterRightIcons
