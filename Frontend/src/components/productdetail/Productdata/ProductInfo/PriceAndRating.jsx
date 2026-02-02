import React from 'react'

function PriceAndRating() {
  return (
    <div className='py-3'>
        <div className='flex gap-5'>
            <div className='text-xl font-bold'>₹599</div>
            <div>₹1,499</div>
            <div className='bg-gray-200 rounded-xl px-2 text-green-500'>60% OFF</div>
        </div>

        <div className='py-3 flex gap-5 items-center '>
            <div className='border rounded-lg font-bold p-1 px-3 text-lg'>4.3*</div>
            <div>666 ratings &amp; 34 reviews</div>
        </div>
    </div>
  )
}

export default PriceAndRating