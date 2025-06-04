import React, { Suspense } from 'react';
import Catagori from './Catagori';

const LeftAside = () => {
    return (
        <div>
           <Suspense fallback={<span className="loading loading-dots loading-sm"></span>
           }>
             <Catagori></Catagori>
           </Suspense>
        </div>
    );
};

export default LeftAside;