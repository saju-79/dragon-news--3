import React from 'react';
import SocialLogin from './SocialLogin';
import FindUp from './FindUp';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-7'>
        <SocialLogin></SocialLogin>
        <FindUp></FindUp>
        <Qzone></Qzone>
        </div>
    );
};

export default RightAside;