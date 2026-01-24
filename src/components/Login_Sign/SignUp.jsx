import React from 'react'
import { Webicon } from '../../assets/assets'
function SignUp({Setshowlogin,Setcurrentstate}) {
  return (
    <div className=" absolute z-1 items-center bg-[#fff] top-20 left-150 border">
      <form action="" className=" flex flex-col relative m-[10px] justify-between">
        <div className="absolute right-0 top-0 ">
            <div onClick={() => Setshowlogin(false)}><img src={Webicon[0]} className='w-[15px]'/></div>
        </div>
        <div className="flex flex-col my-6 mx-3 justify-between">
          <div className="mt-2 mx-3 text-3xl font-bold">
            <h1>New Here?</h1>
            <h1>Create an Account.</h1>
          </div>
          <div className="flex flex-col justify-between my-2 py-5 px-2 w-[350px]  ">
            <input type="text" placeholder="Full Name"  className="border p-1 my-2"/>
            <input type="email" placeholder="Email Address" className="border p-1 my-2"/>
            <input type="password" placeholder="Password" className="border p-1 my-2"/>
            <input type="password" placeholder="Confirm Password" className="border p-1 my-2"/>
            <button className="bg-[#001d35] text-white p-1 my-2">Sign up</button>
          </div>

          <span className="mx-3">Already have an account? <span onClick={()=>Setcurrentstate("SignIn")}>Sign In</span> </span>
            {/* <div>{current}</div> */}
        </div>
      </form>
    </div>
  )
}

export default SignUp