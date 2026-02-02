import React from 'react'
import { Link } from 'react-router-dom'

function SubCategory({ subId, name, slug,subImage ,parentId }) {
  return (
    <Link to={`/product/${parentId}/${subId}`}>
      <div className="w-32 h-28 border  rounded-lg shadow-sm text-center hover:bg-gray-100 cursor-pointer">
        {/* <p className="font-medium text-sm">{name}</p> */}
        <img className='flex items-center w-32 h-28 overflow-hidden rounded-lg object-cover' src={subImage} alt={name} />
      </div>
    </Link>
  )
}

export default SubCategory