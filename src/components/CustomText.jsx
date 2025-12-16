import React from 'react'

function CustomText({text1,text2}) {
  return (
    <div className='w-full h-[20px] justify-center items-center text-4xl font-medium  font-(family-name:--font-Header)'>
        <div className='flex justify-center gap-5'>
            <span className=''>{text1} </span>
            <span className=''>{text2}</span>
        </div>

    </div>
  )
}

export default CustomText