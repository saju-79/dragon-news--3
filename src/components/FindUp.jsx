import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa6';

const FindUp = () => {
    return (
        <div>
            <h2 className='text-[#403F3F] font-bold text-lg '>Find Us On</h2>
            <div className="join join-vertical mt-4">
                 {/* GitHub */}
                       <button className="btn justify-start bg-black text-white border-black">                       
  
                           <FaTwitter size={20}></FaTwitter> Login with Twitter
                       </button>

                       {/* Google */}
                       <button className="btn justify-start bg-white text-black border-[#e5e5e5]">                       
  
                         <FaInstagram size={20} ></FaInstagram> Login with Instragram
                       </button>

                       {/* Facebook */}
                       <button className="btn  justify-start bg-[#1A77F2] text-white border-[#005fd8]">
                        
                          <FaFacebook size={20}></FaFacebook> Login with Facebook
                       </button>
             </div>
        </div>
    );
};

export default FindUp;