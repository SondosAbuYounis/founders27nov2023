// NORMAL CARDS

// import React from 'react'
// import { Comment } from './uiPrimitives/Comment'

// export const CaseStory = () => {
//   return (
//     <>
//     <div className='flex flex-row justify-items-center gap-8'>
//             <div className='col-span-1 w-[20rem] bg-[#86868637] p-4 rounded-[0.75rem]'>
//                 <Comment />
//             </div>
//             <div className='col-span-1 w-[20rem] bg-[#86868637] p-4 rounded-[0.75rem]'>
//                 <Comment />
//             </div>
//             <div className='col-span-1 w-[20rem] bg-[#86868637] p-4 rounded-[0.75rem]'>
//                 <Comment />
//             </div> 
//     </div>
//     </>
//     )
// }


/////////////<< Testimonials WITH SWIPER >>///////////////////

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import SwiperCore, { Autoplay } from 'swiper/core';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// Import Swiper modules
// SwiperCore.use([Autoplay]);

export const CaseStory = () => {
  // const [dataFromFirstAPI, setDataFromFirstAPI] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    
    // GET data from LOSTS
    axios.get('http://localhost:3000/getAllComments')
      .then(response => {
        setData(response.data);
        console.log('comments',data)
      })
      .catch(error => {
        console.error('Error fetching data from the first API:', error);
      });

  }, []);


  const swiperParams = {
    autoplay: {
      delay: 3000, // Set the autoplay delay in milliseconds
    },
    breakpoints: {
      550: {
        slidesPerView: 2,
      },
      825: {
        slidesPerView: 3,
      },
      1120: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 10,
      },
    },
    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10,
    spaceBetween: 0,
    freeMode: true,
    navigation: false,
    loop: true,
    effect: "fade",
  };

  return (

    <div className='max-w-screen-2xl m-0 overflow-hidden relative pb-24'>

      <Swiper {...swiperParams}>
      {Array.isArray(data.comments) && data.comments.map((item) => (
          <SwiperSlide key={item.id_contact}>
            <div className='flex flex-row justify-items-center '>
              <div className='flex flex-row gap-6  bg-[#86868650] p-4 rounded-[0.5rem] hover:scale-105'>
                  <img src="" alt="userpic" className='bg-[#000] row-span-2 w-10 h-10 rounded-full'/>
                  <div className='flex flex-col'>
                      <span className='text-[#000] font-light text-[0.9rem]'>{item.full_name}</span>
                      <span className='text-[#00000095] font-light text-[0.75rem]  max-h-4 h-8 hover:h-12 max-w-8 w-48 overflow-hidden hover:overflow-visible ' >{item.message}</span> 
                  </div>     
              </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};
