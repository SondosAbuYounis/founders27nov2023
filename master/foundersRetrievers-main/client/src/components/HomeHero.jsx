import React from 'react'
import WorldMap from '../assets/clips/WorldMap.png'
import heroNow from '../assets/clips/heroNow.png'
import { Link } from 'react-router-dom'

export const HomeHero = () => {
  return (
    <>
    <div id="hero-section" className='flex flex-row justify-around mt-20 mx-20	'>
      <div className='flex flex-col justify-center text-center'>
        <p className='font-bold	text-4xl mb-5'>Founders Retrievers </p>
        <p className='max-w-[35rem]' >Founders Retrievers is your all in one place lost and found items. Together we can link all lost items to their rightful owner ! </p>
        <ul className='flex flex-row justify-center pt-2 mt-4'>
            <li className=' mb-2 mt-6 mx-2'>
                <Link to="/signin" className=" px-3 pb-2 text-[#000000] bg-transparent focus:outline-none  hover:border hover:border-2 hover:border-[#E83434]  hover:text-[#E83434]  px-5 py-2 rounded-[0.65rem] text-xs font-semibold">SIGN IN</Link>
            </li>
            <li className=' mb-2 mt-6'>
                <Link to="/signup" className=" px-3 pb-2 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">SIGN UP</Link>
            </li>
        </ul>

      </div>
      <img src={heroNow} className='px-3 pb-2 mt-6 h-[30rem] justify-self-start '/>
    </div>

    </>
    )
}
