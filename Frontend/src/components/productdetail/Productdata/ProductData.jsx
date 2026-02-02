import React from 'react'
import HeaderSection from './ProductInfo/HeaderSection'
import PriceAndRating from './ProductInfo/PriceAndRating'
import SizeAndAction from './ProductInfo/SizeAndAction'
import OffersAndDelivery from './ProductInfo/OffersAndDelivery'

function ProductData() {
  return (
    <div className='border bg-transparent rounded-md p-2'>
      <HeaderSection/>
      <PriceAndRating/>
      <SizeAndAction/>
      <OffersAndDelivery/>
    </div>
  )
}

export default ProductData