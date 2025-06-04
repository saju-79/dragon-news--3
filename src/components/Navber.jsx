import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"

const Navber = () => {
    return (
        <div className=' flex justify-between items-center'>
            <div className=""></div>
            <div className="nav flex gap-5 text-[18px ]">
                  <NavLink to="/">Home    </NavLink>
                  <NavLink to="/about">   About  </NavLink>
                  <NavLink to="/career">Career</NavLink>

            </div>
            <div className=" flex gap-4 ">
                <img src={user} alt="" />
                <button className='bg-[#403F3F] text-[#ffffff] btn px-4 py-2 '>Login</button>

            </div>
        </div>
    );
};

export default Navber;