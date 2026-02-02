import React, { useState } from 'react'
import { Webicon } from '../../assets/assets'
import InputField from '../../components/common/InputField'
import { registerUser } from '../../api/authService'
import { validateEmail,validatePassword} from '../../components/utils/validators'
import {useNavigate} from 'react-router-dom'

function SignUp({Setshowlogin,Setcurrentstate}) {
  // const navigate = useNavigate();

  const [error ,setError] = useState("");

  const [form , setForm] = useState({
   name: "",
   email: "",
   password : "",
   conformPassword:""
  })

  const handleChange = (e) =>{
    setForm({...form, [e.target.name] : e.target.value});
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!form.name) return setError("name is required");
    if(!validateEmail(form.email)) return setError("Invalid email");
    
    if(!validatePassword(form.password))  
      return setError("password must be 8+ char,1 uppercase & 1 number");
    if(form.password !== form.conformPassword)  
      return setError("passwords do not match");
    console.log(form.email);

    localStorage.setItem("user",JSON.stringify({
      name:form.name,
      email:form.email,
      // password:form.password
    }))


    await registerUser(form);

    Setcurrentstate("SignIn")
  }
  return (
    <div className=" absolute z-1 items-center bg-[#fff] top-20 left-150 border">
      <form action="" className=" flex flex-col relative m-[10px] justify-between" onSubmit={handleSubmit}>
        <div className="absolute right-0 top-0 ">
            <div onClick={() => Setshowlogin(false)}><img src={Webicon[0]} className='w-[15px]'/></div>
        </div>
        <div className="flex flex-col my-6 mx-3 justify-between">
          <div className="mt-2 mx-3 text-3xl font-bold">
            <h1>New Here?</h1>
            <h1>Create an Account.</h1>
          </div>
           {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <div className="flex flex-col justify-between my-2 py-5 px-2 w-[350px]  ">
            {/* <input type="text" placeholder="Full Name"  className="border p-1 my-2"/> */}
            {/* <input type="email" placeholder="Email Address" className="border p-1 my-2"/>
            <input type="password" placeholder="Password" className="border p-1 my-2"/>
            <input type="password" placeholder="Confirm Password" className="border p-1 my-2"/> */}
            <InputField type="text" placeholder="Full name" name="name" onChange ={handleChange}/>
            <InputField type="email" placeholder="Email Address" name="email" onChange ={handleChange}/>
            <InputField type="password" placeholder="Password" name="password" onChange ={handleChange}/>
            <InputField type="password" placeholder="Conform Password" name="conformPassword" onChange ={handleChange}/>
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