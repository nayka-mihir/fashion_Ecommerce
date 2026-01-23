import React, { useState } from 'react'

function SignUp({Setshowlogin,Setcurrentstate}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Password matching validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return; // Block submission
    }

    // Clear error if passwords match
    setError('');
    
    // Continue with signup logic here
    console.log("Form submitted successfully", formData);
    // Add your API call or signup logic here
  };

  return (
    <div className="absolute z-1 items-center bg-[#fff] top-20 left-150 border">
      <form onSubmit={handleSubmit} className="flex flex-col relative m-[10px] justify-between">
        <div className="absolute right-0 top-0">
          <div onClick={() => Setshowlogin(false)}>icon</div>
        </div>
        <div className="flex flex-col my-6 mx-3 justify-between">
          <div className="mt-2 mx-3 text-3xl font-bold">
            <h1>New Here?</h1>
            <h1>Create an Account.</h1>
          </div>
          <div className="flex flex-col justify-between my-2 py-5 px-2 w-[350px]">
            <input 
              type="text" 
              name="fullName"
              placeholder="Full Name" 
              value={formData.fullName}
              onChange={handleChange}
              className="border p-1 my-2"
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              className="border p-1 my-2"
              required
            />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              className="border p-1 my-2"
              required
            />
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`border p-1 my-2 ${error ? 'border-red-500' : ''}`}
              required
            />
            {error && <p className="text-red-500 text-sm my-1">{error}</p>}
            <button type="submit" className="bg-[#001d35] text-white p-1 my-2">Sign up</button>
          </div>

          <span className="mx-3">Already have an account? <span onClick={()=>Setcurrentstate("SignIn")} className="cursor-pointer text-blue-600 hover:underline">Sign In</span></span>
        </div>
      </form>
    </div>
  )
}

export default SignUp