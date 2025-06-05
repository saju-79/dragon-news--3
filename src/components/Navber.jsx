
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png"

const Navber = () => {
 
      
       
    return (
        <div className=' flex justify-between items-center'>
            <div className="">{}  </div>
            <div className="nav flex gap-5 text-[18px ]">
                  <NavLink to="/">Home    </NavLink>
                  <NavLink to="/about">   About  </NavLink>
                  <NavLink to="/career">Career</NavLink>

            </div>
            <div className=" flex gap-4 ">
                <img src={userIcon} alt="" />
                <Link to="/auth/login" className='bg-[#403F3F] text-[#ffffff] btn px-4 py-2 '>Login</Link>

            </div>
        </div>
    );
};

export default Navber;