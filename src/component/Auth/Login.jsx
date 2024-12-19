import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Register from "./Register";

function Login() {
  const navigate = useNavigate();  // Get the navigate function

  const handleSignin = () =>{
    navigate('/user/dashboard')
  }
  return (
    <div className="bg-black h-screen px-4 pt-24">
      <div className="flex flex-col gap-7 w-full">
        <div className="flex items-center justify-center ">
          <img
            src="https://helixfxai.online/assets/assets/images/logo/logo-white.png"
            alt="img"
            className="w-36"
          />
          <span className="text-white text-3xl font-semibold">Login</span>
        </div>
        <div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-white my-2">
              Mobile Number
            </label>
            <input className="h-12 rounded-lg bg-slate-800 px-4" placeholder="Enter your mobile number..." type="number" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-white my-2">
              Password
            </label>
            <input className="h-12 rounded-lg bg-slate-800 px-4" placeholder="Enter your password..." type="password" />
          </div>
          <div className="flex flex-col mt-3">
            <button className="my-2 p-3 bg-gradient-to-r from-[#08b9d5] via-[#e5e5e5] to-[#0095b9] rounded-lg font-semibold" onClick={handleSignin}>Sign in</button>
          </div>
          <div className="flex flex-col justify-center text-center mt-3">
            <span className="text-slate-500">Don't have an Account?  <Link to='/auth/register' className="text-white">Register</Link></span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
