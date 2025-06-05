import React, { createContext, useState } from 'react';

  export const Authcontext = createContext()

const Authprovider = ({childen}) => {
    const [user , setuser] = useState({
        Name:"saju",
        Email:"saju@gmail.com",
    });
     const authData ={
        user ,
        setuser,
     }
    return<Authcontext authData={authData}>{childen}</Authcontext>
};

export default Authprovider;