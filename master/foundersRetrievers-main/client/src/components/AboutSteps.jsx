import React from 'react'
import { Link } from 'react-router-dom'
import { CardHomeLost } from './uiPrimitives/CardHomeLost'
import { Comment } from '../components/uiPrimitives/Comment'
import { FoundItBtn } from './uiPrimitives/FoundItBtn'
import { LinkIcon } from '../assets/icons/IconsSVGConst'
import { StaticCardHomeLost } from './uiPrimitives/StaticCardHomeLost'

export const AboutSteps = () => {
  return (
    <>

    <div className='grid grid-cols-[64.5rem_30rem] mt-24'>
        <div className='col-span-1 text-start place-self-center flex flex-col gap-1 w-[40rem] max-w-[35rem]'>
            {/* <div className='absolute right-0 top-12 w-[20rem] bg-[#86868637] p-4 rounded-[0.75rem]'>
            <Comment />
            </div> */}
            <div className='text-[1.7rem] font-light'>Sign up </div>
            <div className='text-[#868686] pb-4'>Help others find their lost and let others help you find yours.Help others find their lost and let others help you find yours.</div>
            <div className='text-[1.7rem] font-light'>Publish a lost or found belonging in JORDAN  </div>
            <div className='text-[#868686] pb-4'>Help others find their lost and let others help you find yours.Help others find their lost and let others help you find yours.</div>
            <div className='text-[1.7rem] font-light'>Link items with their rightful owners  </div>
            <div className='text-[#868686] pb-4'>Help others find their lost and let others help you find yours.Help others find their lost and let others help you find yours.</div>
            <div className='text-[1.7rem] font-light'>Found it </div>
            <div className='text-[#868686] pb-4'>Help others find their lost and let others help you find yours.Help others find their lost and let others help you find yours.</div>
            <div className='text-[1.7rem] font-light'>Reunite with your lost </div>
            <div className='text-[#868686] pb-4'>Help others find their lost and let others help you find yours.Help others find their lost and let others help you find yours.</div>
            <div className='text-[1.7rem] font-light'>Mine </div>
            <div className='text-[#868686] pb-4'>Help others find their lost and let others help you find yours.Help others find their lost and let others help you find yours.</div>
            <div className='text-[1.7rem] font-light'>Delivery service </div>
            <div className='text-[#868686] pb-4'>Help others find their lost and let others help you find yours.Help others find their lost and let others help you find yours.</div>
            <div className='text-[1.7rem] font-light'>Donate </div>
            <div className='text-[#868686] pb-4'>Help others find their lost and let others help you find yours.Help others find their lost and let others help you find yours.</div>
           

            
        </div>
        <div className='col-span-1 pt-[16rem] justify-self-end items-end content-center'>
            <div className='relative'> 

                 <div className='absolute top-[6rem]  right-[16rem] bg-[#86868690] w-[18rem] h-40 p-4 pb-4 rounded-[1.25rem]'>
                    <div className='bg-[#373737] -z-[60] h-32 pt-12 p-6 pb-4 rounded-[1rem]'>
                        <button className=" w-32 h-12 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-[1rem] font-[0.8rem] rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">FOUND IT</button>
                    </div>
                </div>
                
                <div className='relative bg-[#86868650] w-[21.7rem] m-4 p-[1.7rem] rounded-[1.25rem]'>
                    <StaticCardHomeLost />
                </div>
                
              
                <div className='absolute -top-[4rem] right-[0rem] bg-[#86868690] w-[15rem] h-40 p-4 pb-4 rounded-l-[1.25rem]'>
                    <div className='bg-[#373737]   h-32 pt-12 p-6 pb-4 rounded-[1rem]'>
                        <button className=" w-32 h-12 text-[#FBE62E] bg-transparent border border-2 border-[#FBE62E]  focus:outline-none hover:bg-[#FBE62E] hover:text-[#FFFFFF] text-[1rem] font-[0.8rem] rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">FOUND IT</button>
                    </div>
                </div>
                <div className='absolute top-[24rem] right-[14rem] col-span-1 w-[20rem] bg-[#86868637] p-4 rounded-[0.75rem]'>
                    <Comment />
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}
