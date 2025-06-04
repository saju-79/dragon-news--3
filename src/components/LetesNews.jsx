import React from 'react';
import Marquee from 'react-fast-marquee';

const LetesNews = () => {
    return (
        <div className=' flex items-center gap-3 bg-base-200 p-3 drop-shadow-sm'>
          <p className=' bg-[#D72050] text-[#ffffff] px-4 py-2 rounded-sm' >Latest</p>
          <Marquee className='  flex gap-4  ' pauseOnHover={true} speed={100}>

          <p className='text-[#403F3F] font-semibold text-[18px]'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
          <p className='text-[#403F3F] font-semibold text-[18px]'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
          <p className='text-[#403F3F] font-semibold text-[18px]'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>

          </Marquee>
        </div>
    );
};

export default LetesNews;