import React from 'react';
import swimming from "../assets/swimming.png"
import classa from "../assets/class.png"
import playground from "../assets/playground.png"
import bg from "../assets/bg.png"

const Qzone = () => {
    return (

        <div className='bg-base-200'>
            <h2 className='font-bold text-lg mt-5 '>Q-Zone</h2>
            <div className="space-y-4">
                <img src={swimming} alt="" />
                <img src={classa} alt="" />
                <img src={playground} alt="" />
                <img src={bg} alt="" />

            </div>
        </div>
    );
};

export default Qzone;