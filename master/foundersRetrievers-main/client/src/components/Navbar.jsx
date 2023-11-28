import React from 'react'
import { Link } from 'react-router-dom'
import LogoTwoPng from '../assets/clips/LogoTwoPng.png'
import { Plus, LinkIcon, Minus } from '../assets/icons/IconsSVGConst'
////JWT///////
import { UseUser } from '../hooks/useContext/UserContext'


export const Navbar = () => {
////JWT///////
const { isAuthenticated, logout } = UseUser();

  return (
    <div className='flex flex-row justify-around'>
        <ul className='flex flex-row pt-8 gap-x-4 mt-4'>
            {/* Manage if signed in  */}
            <li className=' '>
            <Link  to="/signup" className="flex flex-row inline-block gap-x-2 px-[0.75rem] pb-2 text-[#18E074] bg-none border border-2 border-[#18E074]  focus:outline-none hover:bg-[#18E074] hover:text-[#FFFFFF] text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-[7rem]"> <LinkIcon />  RETRIEVED</Link>
            </li>
            <li className=' '>
            <Link  to="/signup" className="flex flex-row inline-block gap-x-2 px-[0.75rem] pb-2 text-[#FBE62E] bg-none border border-2 border-[#FBE62E]  focus:outline-none hover:bg-[#FBE62E] hover:text-[#FFFFFF] text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><Plus />  I’VE FOUND</Link>
            </li>
            <li className=' '>
            <Link  to="/signup" className="flex flex-row inline-block gap-x-2 px-[0.75rem] pb-2 text-[#E83434] bg-none border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><Minus />  I’VE LOST</Link>
            </li>
        </ul>
        <img src={LogoTwoPng} className='px-3 pb-2 mt-6 gap-x-4  h-[4.25rem] justify-self-start	'/>
        <ul className='flex flex-row pt-2 mt-4'>
            <li className=' mb-2 mt-6 mx-2'>
                <div className="w-[7rem] px-3 pb-2 text-transparent  bg-transparent focus:outline-none   px-5 py-2 rounded-[0.65rem] text-xs font-semibold"></div>
            </li>
            {isAuthenticated ? (
          <>
            <li>
              <Link to="/profilepage">Profile</Link>
            </li>
            <li className="  mx-2">
                <Link to=""> <button onClick={logout} className=" px-3 pb-2 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 whitespace-nowrap ">LOG OUT </button></Link>
            </li>
          </>
        ) : (
            <>
            <li className=' mb-2 mt-6 mx-2'>
                <Link to="/signin" className=" px-3 pb-2 text-[#000000] bg-transparent focus:outline-none  hover:border hover:border-2 hover:border-[#E83434]  hover:text-[#E83434]  px-5 py-2 rounded-[0.65rem] text-xs font-semibold">SIGN IN</Link>
            </li>
            <li className=' mb-2 mt-6'>
                <Link to="/signup" className=" px-3 pb-2 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">SIGN UP</Link>
            </li>
            </>
        )}
        </ul>

    </div>
  )
}
