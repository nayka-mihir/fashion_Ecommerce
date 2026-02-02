import React from 'react'

function InputField({label ,className=" ", ...props}) {
  return (
    <div>
        {/* <label className=''>{label}</label><br/> */}
        <input {...props} className={`border w-[330px] ${className} px-3 py-2 rounded focus:outline-none focus:ring-2  focus:ring-blue-500`} />
    </div>
  )
}

export default InputField

