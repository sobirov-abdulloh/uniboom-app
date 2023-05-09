import React from 'react'

function ProductSpecs({about, info}) {
  return (
    <div className="w-1/2 pb-8">
      <h1 className="text-md py-8 font-bold">{about}</h1>
      {info.map(item => (
        <ul
          className="w-full flex justify-between mb-5 items-end text-md"
          key={item.id}
        >
          <li>
            <p className="text-gray-100">{item.text}</p>
          </li>
          <li className="border-gray-100 border-b-2 border-dotted grow"></li>
          <li>
            <ul className="text-right font-bold">
              {item.info.map(text => (
                <li key={text.id}>{text.text}</li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default ProductSpecs
