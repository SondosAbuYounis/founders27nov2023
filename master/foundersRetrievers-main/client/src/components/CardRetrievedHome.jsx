import React from 'react'
import { LinkIcon } from '../assets/icons/IconsSVGConst'
import { Comment } from './uiPrimitives/Comment'
import LostParrot from '../assets/clips/LostParrot.png'

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

export const CardRetrievedHome = () => {
  const [dataFromFirstAPI, setDataFromFirstAPI] = useState([]);
  const [dataFromSecondAPI, setDataFromSecondAPI] = useState([]);


  useEffect(() => {
    // GET data from LOSTS
    axios
      .get("http://localhost:3000/retreve")
      .then((response) => {
        setDataFromFirstAPI(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from the first API:", error);
      });

    // GET data from FOUNDS
    axios
      .get("http://localhost:3000/retreve2")
      .then((response) => {
        setDataFromSecondAPI(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from the second API:", error);
      });
  }, []);

  const combinedData = [];

  for (
    let i = 0;
    i < Math.max(dataFromFirstAPI.length, dataFromSecondAPI.length);
    i++
  ) {
    if (dataFromFirstAPI[i]) {
      combinedData.push({ type: "lost", data: dataFromFirstAPI[i] });
    }

    if (dataFromSecondAPI[i]) {
      combinedData.push({ type: "found", data: dataFromSecondAPI[i] });
    }
  }

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
    spaceBetween: -5,
    freeMode: true,
    navigation: false,
    loop: true,
    effect: "fade",
  };
    return (
    <>  
    <div className='flex flex-row '>
     
     <Swiper {...swiperParams}>
        {Array.isArray(combinedData) && combinedData.map((item, user_id) => (
          <SwiperSlide key={item.user_id}>
          <>
          {/* <div>{item.type}</div> */}
            <div className='flex flex-col'>
              <span className="flex flex-row gap-x-2 pb-2 inline-block border-[#fff]  text-[#18E074] bg-none text-[0.7rem] font-semibold rounded-[0.65rem] text-xs dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-[7rem]"> <LinkIcon />  RETRIEVED</span>
              <div className='relative flex rounded-[1.25rem] w-[18rem] h-[25rem] ' style={{ backgroundImage: `url(${item.data.imageurl})`, backgroundSize: 'cover' }} >
              <div className='absolute inset-0 rounded-[1.25rem] w-[18rem] h-[25rem] bg-[#00000075]'></div>

                  <div className='self-end bg-[#86868625] p-4 w-[18rem]  rounded-b-[1.25rem]  absolute bottom-0 -z-1'>
                  <div className='flex flex-row gap-6  '>
                      <img src="" alt="userpic" className='bg-[#000] row-span-2 w-10 h-10 rounded-full'/>
                      <div className='flex flex-col'>
                          <span className='text-[#ffffff] font-light text-[0.9rem] w-44 max-w-44 overflow-hidden'>{item.data.title}</span>
                          <span className='text-[#ffffff85] font-light text-[0.75rem] w-44 max-w-44' >{item.data.description}</span> 
                      </div>     
                  </div>

                  </div>

              </div>
            </div>
            </>
          </SwiperSlide>
          ))}
        </Swiper>
    </div>
    </>
  )
}
