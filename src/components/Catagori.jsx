import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoripose = fetch("/categories.json" ).then((res) => res.json())

const Catagori = () => {
    const categori = use(categoripose)
    return (
        

        <div>
            <h2 className='text-[#403F3F] font-bold text-xl' >All Caterogy ( {categori.length})</h2>
            <div className=" grid grid-cols-1 mt-5 font-semibold gap-3  ">
                {
                   categori.map((cata)=>(
                    <NavLink 
                    
                     key={cata.id}
                    to={`/catagori/${cata.id}`}
                      className={"btn border-0 bg-white shadow-lg hover:bg-blue-500 rounded-sm hover:text-[#ffffff]" }> {cata.name}</NavLink>
                   )
                   )
                }
            </div>
        </div>
    );
};

export default Catagori;