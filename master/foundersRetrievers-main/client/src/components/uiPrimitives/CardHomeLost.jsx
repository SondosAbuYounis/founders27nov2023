import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Minus, Plus } from '../../assets/icons/IconsSVGConst';
import { FoundItBtn } from './FoundItBtn';
import { NotSignedIn } from './NotSignedIn';
import { MineBtn } from './MineBtn';
import { useModal } from '../../hooks/useContext/ModalContext';

export const CardHomeLost = () => {
  const { modalIsOpen, openModal, closeModal } = useModal();
  const [dataFromFirstAPI, setDataFromFirstAPI] = useState([]);
  const [dataFromSecondAPI, setDataFromSecondAPI] = useState([]);

  useEffect(() => {
    // GET data from LOSTS
    axios.get('http://localhost:3000/losts')
      .then(response => {
        setDataFromFirstAPI(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from the first API:', error);
      });

    // GET data from FOUNDS
    axios.get('http://localhost:3000/Founds')
      .then(response => {
        setDataFromSecondAPI(response.data);
        // console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching data from the second API:', error);
      });
  }, []); 

  const combinedData = [];

  for (let i = 0; i < Math.max(dataFromFirstAPI.length, dataFromSecondAPI.length); i++) {
    if (dataFromFirstAPI[i]) {
      combinedData.push({ type: 'losts', data: dataFromFirstAPI[i] });
      console.log('Image URL:', combinedData.image_url);
    }

    if (dataFromSecondAPI[i]) {
      combinedData.push({ type: 'found', data: dataFromSecondAPI[i] });
    }
  }

  return (
    <>  
      {combinedData.map((item, user_id) => (
      <div  key={user_id}>
        {item.type === 'losts' ? (
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
                <span key={item.user_id} className='text-[#CDCDCD] font-light text-[0.9rem]'>Caroline</span>
                <span key={item.user_id} className='text-[#CDCDCD85] font-light text-[0.75rem]' >{item.data.city}</span> 
            </div>     
        </div>
        <div className='border border-1-solid rounded-[1.25rem] h-[14rem]'>
        <img src={`${item.data.image_url}`} alt={`Image for ${item.data.description}`} className='rounded-[1.25rem]' />
        </div>
        <div className='flex flex-row gap-[4.75rem] items-center'>
            <button  onClick={openModal} > <FoundItBtn/></button>
            <NotSignedIn isOpen={modalIsOpen} onRequestClose={closeModal} />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 19.5H4V19.5C2.34315 19.5 1 18.1569 1 16.5V1H19.5V19.5H10.5V9M6.5 9L9.79289 5.70711C10.1834 5.31658 10.8166 5.31658 11.2071 5.70711L14.5 9" stroke="#D9D9D975"/>
            </svg>
        </div>
    </div>
    </div>
    ) : (
    <div className='flex flex-col'>
    <span className="flex flex-row inline-block gap-x-2 px-[0.75rem] pb-2 text-[#FBE62E] bg-none text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><Plus />  I’VE FOUND</span>
    <div className='p-8 pb-8 gap-4 grid grid-col-1 grid-flow-row  bg-[#373737] rounded-[1.25rem] w-[18rem] h-[25rem] ' >
        <div className='flex flex-row gap-6 '>
            <img src="" alt="userpic" className='bg-[#CDCDCD] row-span-2 w-10 h-10 rounded-full'/>
            <div className='flex flex-col'>
                <span key={item.user_id} className='text-[#CDCDCD] font-light text-[0.9rem]'>Caroline</span>
                <span key={item.user_id} className='text-[#CDCDCD85] font-light text-[0.75rem]' >{item.data.city}</span> 
            </div>     
        </div>
        <div className='border border-1-solid rounded-[1.25rem] h-[14rem]'>
        <img src={`${item.data.image_url}`} alt={`Image for ${item.data.description}`} className='object-cover w-full h-full rounded-[1.25rem]' />
        </div>
        <div className='flex flex-row gap-[4.75rem] items-center'>
            <MineBtn />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 19.5H4V19.5C2.34315 19.5 1 18.1569 1 16.5V1H19.5V19.5H10.5V9M6.5 9L9.79289 5.70711C10.1834 5.31658 10.8166 5.31658 11.2071 5.70711L14.5 9" stroke="#D9D9D975"/>
            </svg>
        </div>
    </div>
    </div>
     )}

    </div>
    ))}
    </>
  )
}
