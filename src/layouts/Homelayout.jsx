import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <section className='left-nev'></section>
                <section className='main '>
                    <Outlet></Outlet>
                </section>
                <section className='right-nev '></section>
            </main>
        </div>
    );
};

export default Homelayout;