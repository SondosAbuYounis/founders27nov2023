import React from 'react'
import { Minus } from '../../assets/icons/IconsSVGConst'
import { FoundItBtn } from './FoundItBtn'

// import { NotSignedIn } from './NotSignedIn';
// import { useModal } from '../../hooks/useContext/ModalContext';


export const StaticCardHomeLost = () => {
    // const { modalIsOpen, openModal, closeModal } = useModal();

  return (
    <>
     <div className='flex flex-col'>
    <span className="flex flex-row inline-block gap-x-2 px-[0.75rem] pb-2 text-[#E83434] bg-none focus:outline-none text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><Minus />  I’VE LOST</span>
    <div className='p-8 pb-8 gap-4 grid grid-col-1 grid-flow-row  bg-[#373737] rounded-[1.25rem] w-[18rem] h-[25rem] ' >
        {/* <div className='grid grid-cols-2 grid-rows-2 justify-items-stretch'>
            <img src="" alt="" className=' row-span-2 w-10 h-10 rounded-12'/>
            <span className='text-[#CDCDCD] font-light text-[0.9rem]'>Caroline</span>
            <span className='text-[#CDCDCD85] font-light text-[0.75rem]' >Amman</span>      
        </div> */}
        <div className='flex flex-row gap-6 '>
            <img src="" alt="userpic" className='bg-[#ffffff75] row-span-2 w-10 h-10 rounded-full'/>
            <div className='flex flex-col'>
                <span className='text-[#CDCDCD] font-light text-[0.9rem]'>Caroline</span>
                <span className='text-[#CDCDCD85] font-light text-[0.75rem]' > Amman</span> 
            </div>     
        </div>
        <div className='border border-1-solid rounded-[1.25rem] h-[14rem]'>
            <img src="" alt="" className='rounded-[1.25rem]'/>                    
        </div>
        <div className='flex flex-row gap-[4.75rem] items-center'>
            {/* <button  > <FoundItBtn/></button> */}
            <button className=" w-32 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">FOUND IT</button>

            {/* <button  onClick={openModal} > <FoundItBtn/></button> */}
            {/* <NotSignedIn isOpen={modalIsOpen} onRequestClose={closeModal} /> */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 19.5H4V19.5C2.34315 19.5 1 18.1569 1 16.5V1H19.5V19.5H10.5V9M6.5 9L9.79289 5.70711C10.1834 5.31658 10.8166 5.31658 11.2071 5.70711L14.5 9" stroke="#D9D9D975"/>
            </svg>
        </div>
    </div>
    </div>
    </>
  )
}


