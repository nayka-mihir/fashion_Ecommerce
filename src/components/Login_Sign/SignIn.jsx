import React from 'react'
import { Webicon } from '../../assets/assets'
import InputField from '../common/InputField'

function SignIn({Setshowlogin, current,Setcurrentstate}) {
  return (
     <div className=" absolute z-1 items-center bg-[#fff] top-20 left-150 border">
      <form action="" className=" flex flex-col relative m-[10px] justify-between">
        <div className="absolute right-0 top-0 ">
            <div onClick={() => Setshowlogin(false)}>
              <img src={Webicon[0]} alt="remove" className='w-[15px]'/>
            </div>
        </div>
        <div className="flex flex-col my-6 mx-3 justify-between">
          <div className="mt-2 mx-3 text-3xl font-bold">
            <h1>Welcome Back.</h1>
            <h1>Please Sign In.</h1>
          </div>
            <h3 className='mx-3 mt-2'>Every Login is Required for Your Security</h3>
          <div className="flex flex-col justify-between my-2 py-5 px-2 w-[350px]  ">
            {/* <input type="email" placeholder="Email Address" className="border p-1 my-2"/> */}
            {/* <input type="password" placeholder="Password" className="border p-1 my-2"/> */}
            <InputField label="Email" name="Email" type="email" placeholder="Email Address"/>
            <InputField label="Password" name="password" type="password" placeholder="Password"/>
            <button className="bg-[#001d35] text-white p-1 my-2">Sign In</button>
          </div>

          <span className="mx-3">New here ? <span onClick={()=>Setcurrentstate("Signup")}> Create a account</span> </span>
            {/* <div>{current}</div> */}
        </div>
      </form>
    </div>
  )
}

export default SignIn