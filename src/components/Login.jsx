import React from 'react';
import Navber from './Navber';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex items-center justify-center mim-h-screen  '>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='text-[#403F3F] text-2xl font-semibold text-center items-center py-6'>Login your account</h2>
         <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-sm py-3 text-[#706F6F] font-semibold'>Dont’t Have An Account ? <Link to="/auth/registation" className='text-[#F75B5F] font-bold'>Register</Link></p>
        </fieldset>
      </div>
       </div>
        </div>
    );
};

export default Login;