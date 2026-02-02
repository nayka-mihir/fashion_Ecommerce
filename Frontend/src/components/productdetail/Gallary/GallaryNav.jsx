import React from 'react'

function GallaryNav({nextImage,prevImage}) {
  return (
    <div className='flex justify-between  w-full'>
        <button onClick={prevImage}>◀</button>
        <button onClick={nextImage}>▶</button>
    </div>
  )
}

export default GallaryNav