import React, { useState } from "react";

function Login({ Setshowlogin }) {
  const [current, Setcurrentstate] = useState("Sign up");
  return (
    <div className="">
      <form action="" className="w-[300px] border flex flex-col relative">
        <div className="absolute right-0 top-0">
            <div onClick={() => Setshowlogin(false)}>icon</div>
        </div>
        <div className="flex items-center flex-col">
          <div>
            <h1>New Here?</h1>
            <h1>Create an Account.</h1>
          </div>
          <div className="flex flex-col">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" p0laceholder="Confirm Password" />
          </div>

          <button>Sign up</button>

          <span>Already have an account? Sign In</span>
            <div>{current}</div>
        </div>
      </form>
    </div>
  );
}

export default Login;
