import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router';

const AuthLaut = () => {
    return (
        <div className='bg-base-200 mim-h-screen'>
          <header className='w-11/12 mx-auto py-5'><Navber></Navber></header>
          <main className='bg-base-200 mx-auto w-11/12'> 
              <Outlet></Outlet>
          </main>
        </div>
    );
};

export default AuthLaut;