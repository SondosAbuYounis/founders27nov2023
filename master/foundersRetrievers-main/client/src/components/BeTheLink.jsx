import React from 'react'
import { Link } from 'react-router-dom'
import { CardHomeLost } from './uiPrimitives/CardHomeLost'
import { Comment } from '../components/uiPrimitives/Comment'
import { FoundItBtn } from './uiPrimitives/FoundItBtn'
import { LinkIcon } from '../assets/icons/IconsSVGConst'
import { StaticCardHomeLost } from './uiPrimitives/StaticCardHomeLost'



export const BeTheLink = () => {
  return (
    <>
    <div className='relative grid grid-cols-[64.5rem_30rem] mt-24'>
        <div className='col-span-1 items-start justify-self-center place-self-center flex flex-col align-center'>
            <div className='absolute left-1 top-4 w-[20rem] bg-[#86868637] p-4 rounded-[0.75rem]'>
            <Comment />
            </div>
            <span className="flex flex-row inline-block gap-x-2 px-[0.75rem] pb-2 text-[#18E074] bg-none  text-[0.7rem] font-semibold text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-[7rem]"><LinkIcon />  RETRIEVED </span>
            <div className='place-items-center text-2xl font-semibold'>
            <span className='underline'>S</span>ign UP now !! Be the link !!
            </div>
            <span>Help others find their lost and let others help you find yours.</span>
            <Link to="/signup" className="w-24 px-3 pb-2 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">SIGN UP</Link>
            
        </div>
        <div className='col-span-1 justify-self-end'>
            <div className='relative'> 

                 <div className='absolute top-[6rem]  right-[16rem] bg-[#86868690] w-[18rem] h-40 p-4 pb-4 rounded-[1.25rem]'>
                    <div className='bg-[#373737] -z-[60] h-32 pt-12 p-6 pb-4 rounded-[1rem]'>
                        <button className=" w-32 h-12 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-[1rem] font-[0.8rem] rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">FOUND IT</button>
                    </div>
                </div>
                
                <div className='relative bg-[#86868650] w-[22rem] m-4 p-[2rem] rounded-[1.25rem]'>
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
