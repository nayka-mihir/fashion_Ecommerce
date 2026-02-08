import React, { useContext } from 'react'
import HeaderSection from './ProductInfo/HeaderSection'
import PriceAndRating from './ProductInfo/PriceAndRating'
import SizeAndAction from './ProductInfo/SizeAndAction'
import OffersAndDelivery from './ProductInfo/OffersAndDelivery'
import { useParams } from 'react-router-dom'
import { WebContext } from '../../../context/WebContext'

function ProductData() {
  const {id} = useParams();
  const {productDetails} = useContext(WebContext);

 

  return (
    <div className='border bg-transparent rounded-md p-2'>
      <HeaderSection />
      <PriceAndRating/>
      <SizeAndAction/>
      <OffersAndDelivery/>
    </div>
  )
}

export default ProductData