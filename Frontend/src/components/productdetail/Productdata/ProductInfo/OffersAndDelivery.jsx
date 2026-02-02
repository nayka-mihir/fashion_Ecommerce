import React from 'react'
// import InputField from '../common/InputField'
import InputField from '../../../common/InputField'

function OffersAndDelivery() {
  return (
    <div>
        <div className='py-2 px-3 items-center border'>
            <div className='my-2'>Save extra with these offers</div>
            <div className='flex py-2 my-2='><div className='p-1 border mx-2 bg-[#fef0e6]'>%</div><div><b>Get EXTRA 10% Cashback</b><div>On purchases above ₹499. T&C apply</div></div></div>
            <div className='py-2  my-2'><span className='p-1 border mx-2 bg-[#eef9f2]' >+</span><span><b>Buy 2 for ₹999</b></span><span>Auto applied offer</span></div>
        </div>
        <div>
          <div>Check for Delivery Details</div>
          <div className='flex  items-center gap-5 p-2'>
            <InputField type="text" placeholder="input" className='w-[450px]'/>
            <input type="submit" value="Check" className='border p-2 bg-[#e6e9ef]' />
          </div>
        </div>
    </div>
  )
}

export default OffersAndDelivery