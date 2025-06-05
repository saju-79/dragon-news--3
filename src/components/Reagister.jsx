import React from 'react';

const Reagister = () => {
    return (
        <div className='flex items-center justify-center mim-h-screen  '>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='text-[#403F3F] text-2xl font-semibold text-center items-center py-6'>Register your account</h2>
         <div className="card-body">
        <from className="fieldset">
          <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover text-[#706F6F]">Accept Term & Conditions</a></div>
          <button className="btn btn-neutral mt-4">Register </button>
          
        </from>
      </div>
       </div>
        </div>
    );
};

export default Reagister;