import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {
    return (
        <div className=''>
            <h2 className='font-bold mb-5'>Login with</h2>
            <div className="space-y-5">
                <button className='btn w-full  hover:bg-fuchsia-400  btn-outline hover:text-[#FFFFFF]' > <FcGoogle size={24} />Login withe Google</button>
                <button className='btn w-full hover:bg-red-500  hover:text-[#FFFFFF] btn-outline'><FaGithub size={24} />Login withe Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;