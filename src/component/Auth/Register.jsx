import React from "react";

import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();  // Get the navigate function
  
    const handleSignup = () =>{
      navigate('/user/dashboard')
    }
  return (
    <div className="bg-black  px-4 pt-8">
      <div className="flex flex-col gap-7 w-full">
        <div className="flex items-center justify-center ">
          <img
            src="https://helixfxai.online/assets/assets/images/logo/logo-white.png"
            alt="img"
            className="w-36"
          />
          <span className="text-white text-3xl font-semibold">Sign Up</span>
        </div>
        <div>
          <div className="flex flex-col">
            <label htmlhtmlFor="" className="text-white my-2">
              Create Username
            </label>
            <input
              className="h-12 rounded-lg bg-input px-4"
              placeholder="Enter your username..."
              type="number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlhtmlFor="" className="text-white my-2">
              Mobile Number
            </label>
            <input
              className="h-12 rounded-lg bg-input px-4"
              placeholder="Enter your mobile number..."
              type="number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlhtmlFor="" className="text-white my-2">
              Email
            </label>
            <input
              className="h-12 rounded-lg bg-input px-4"
              placeholder="Enter your Email..."
              type="number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlhtmlFor="" className="text-white my-2">
              Set Login Password
            </label>
            <input
              className="h-12 rounded-lg bg-input px-4"
              placeholder="Enter your password..."
              type="password"
            />
          </div>
          <div className="flex flex-col">
            <label htmlhtmlFor="" className="text-white my-2">
              Confirm Login Password
            </label>
            <input
              className="h-12 rounded-lg bg-input px-4"
              placeholder="Enter confirm password..."
              type="password"
            />
          </div>
          <div className="flex flex-col">
            <label htmlhtmlFor="" className="text-white my-2">
              Referral ID/Promo Code
            </label>
            <input
              className="h-12 rounded-lg bg-input px-4"
              placeholder="Enter your Referral ID/Promo Code..."
              type="password"
            />
          </div>

          <div class="flex items-start mt-3">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                required=""
              />
            </div>
            <div class="ml-3 text-sm">
              <label htmlFor="remember" class="text-gray-500 dark:text-gray-300">
              <label htmlFor="" className="text-xs">	I agree to the <span class="ms-1 underline text-primary" data-bs-toggle="modal" data-bs-target="#terms&amp;condition"><u>Terms &amp; Condition</u></span> &amp; confirm I am at least 18 years old </label>
              </label>
            </div>
          </div>
          <div className="flex flex-col mt-1">
            <button className="my-2 p-3 bg-gradient-to-r from-gradient1 via-[#e5e5e5] to-gradient1 rounded-lg font-semibold" onClick={handleSignup}>
              Sign in
            </button>
          </div>
          <div className="flex flex-col justify-center text-center my-1 mb-8">
            <span className="text-slate-500">
              Have an Account?  
              <Link to='/auth/login' className="text-white">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
