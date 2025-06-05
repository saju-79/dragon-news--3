import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LetesNews from '../components/LetesNews';
import Navber from '../components/Navber';
import LeftAside from '../components/LeftAside';
import RightAside from '../components/RightAside';


const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                  <section className='w-11/12 mx-auto   '>
                  <LetesNews></LetesNews>
                   </section>
                   <nav className='w-11/12 mx-auto'>
                       <Navber></Navber>
                   </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-3'>
                <section className='left-nev col-span-3  sticky top-0 h-fit'>
                    <aside  className=''   ><LeftAside></LeftAside></aside>
                </section>
                <section className='main col-span-6 sticky top-0 h-fit  '>
                    <aside className=''><Outlet></Outlet></aside>
                </section>
                <section className='right-nev col-span-3  sticky top-0 h-fit'>
                    <aside className='' ><RightAside></RightAside></aside>
                </section>
            </main>
        </div>
    );
};

export default Homelayout;