import React, { useEffect, useState } from "react";

import { FoundItBtn } from "../uiPrimitives/FoundItBtn";
import { NotSignedIn } from "../uiPrimitives/NotSignedIn";
import { useModal } from "../../hooks/useContext/ModalContext";
import { MainCardFound } from "../MainCardFound";
import LostParrot from "../../assets/clips/LostParrot.png"

import { MineBtn } from "../uiPrimitives/MineBtn";
import {
  Minus,
  Calendar,
  Cancel,
  Plus,
  Share,
  Location,
  LinkIcon,
} from "../../assets/icons/IconsSVGConst";
import { Comment } from "../uiPrimitives/Comment";
import { ConfirmContact } from "../uiPrimitives/ConfirmContact";

export const LostCard = ({
  user_id,
  onRequestClose,
  title,
  city,
  day,
  confirmContactIsOpen,
  openConfirmContact,
  closeModal,
}) => {
  return (
    <div key={user_id} className="flex flex-col">
      <div className="flex flex-col">
        <span className="flex flex-row gap-4 inline-block pb-2 text-[#E83434] bg-none text-[0.7rem] font-semibold rounded-[0.65rem] text-xs py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          <Minus /> I’VE LOST
        </span>
        <div className="p-8 justify-stretch grid grid-col-1 grid-flow-row  bg-[#373737] rounded-[1.25rem] w-[20rem] h-[36rem] ">
          <div className="flex flex-col">
        
            <div className="flex flex-row gap-4 ">
              <img
                src=""
                alt="userpic"
                className="bg-[#CDCDCD] row-span-2 w-10 h-10 rounded-full"
              />
              <div className="text-[#CDCDCD] font-light text-[0.9rem]">
                {title}
                <span className="block text-[#CDCDCD85] font-light text-[0.75rem]">
                  {city}
                </span>{" "}
              </div>
              <div className="pt-[0.3rem] pl-16 text-end text-[#CDCDCD] font-light text-[0.65rem]">
                {day} <span className="block">11 Nov 2023</span>
              </div>
            </div>
            <hr className="w-56 content-end m-2 border-[#CDCDCD50] border-dashed  sm:mx-auto dark:border-gray-700" />
            <span className="text-[#CDCDCD] text-start font-light text-[0.75rem]">
              I’ve lost my wallet please HELP !!
              <span className="block text-start flex gap-2 items-center ">
                <Location /> Amman II
                <span className="inline-block ml-4 flex gap-2 items-center">
                  <Calendar /> 11 Nov 2023
                </span>
              </span>
            </span>
            <div className="pt-[0.3rem] pl-16 text-[#CDCDCD] font-light text-[0.65rem]"></div>
          </div>

          <div className="flex flex-col"></div>

          <div className="mt-4 border border-1-solid rounded-[1.25rem]  w-[14rem] h-[14rem]">
            <img src="" alt="" className="rounded-[1.25rem]" />
          </div>

          <div className="mt-8 col-span-1 w-[16rem] h-[4rem] bg-[#86868637] p-4 rounded-[0.75rem]">
            <Comment />
          </div>

          <div className="flex flex-row gap-[4.75rem] items-center">
            <button onClick={openConfirmContact}>
              <FoundItBtn />
            </button>
            <ConfirmContact
              isOpen={confirmContactIsOpen}
              onRequestClose={closeModal}
            />
            <div className="pl-8">
              <Share />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const FoundCard = ({
  user_id,
  onRequestClose,
  title,
  city,
  day,
  description,
  confirmContactIsOpen,
  openConfirmContact,
  closeModal,
}) => {
  return (
    <div className=" left-[30rem] flex flex-col">
        <span className="flex flex-row gap-4 inline-block pb-2 text-[#FBE62E] bg-none text-[0.7rem] font-semibold rounded-[0.65rem] text-xs py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Plus /> I’VE FOUND
        </span>
        <div className="p-8 justify-stretch grid grid-col-1 grid-flow-row  bg-[#373737] rounded-[1.25rem] w-[20rem] h-[36rem] ">
        <div className="flex flex-col">
            <div className="flex flex-row gap-4 ">
            <img
                src=""
                alt="userpic"
                className="bg-[#CDCDCD] row-span-2 w-10 h-10 rounded-full"
            />
            <div className="text-[#CDCDCD] font-light text-[0.9rem]">
                {title}
                <span className="block text-[#CDCDCD85] font-light text-[0.75rem]">
                {city}
                </span>{" "}
            </div>
            <div className="pt-[0.3rem] pl-16 text-end text-[#CDCDCD] font-light text-[0.65rem]">
                {day}{" "}
                <span className="block">{/*created_at*/}</span>
            </div>
            </div>
            <hr className="w-56 content-end m-2 border-[#CDCDCD50] border-dashed  sm:mx-auto dark:border-gray-700" />
            <span className="text-[#CDCDCD] text-start font-light text-[0.75rem]">
            {description}
            <span className="block text-start flex gap-2 items-center ">
                <Location />
                {city} II
                <span className="inline-block ml-4 flex gap-2 items-center ">
                <Calendar />
                {/*date_found*/}
                </span>
            </span>
            </span>
            <div className="pt-[0.3rem] pl-16 text-[#CDCDCD] font-light text-[0.65rem]"></div>
        </div>
    
        <div className="flex flex-col"></div>
    
        <div className="mt-4 border border-1-solid rounded-[1.25rem]  w-[14rem] h-[14rem]">
            <img src="" alt="" className="rounded-[1.25rem]" />
        </div>
    
        <div className="mt-8 col-span-1 w-[16rem] h-[4rem] bg-[#86868637] p-4 rounded-[0.75rem]">
            <Comment />
        </div>
    
        <div className="flex flex-row gap-[4.75rem] items-center">
            <button >
            <MineBtn />
            </button>
           
            {/* <button onClick={openPayment}>
            <MineBtn />
            </button>
            <Payment
            isOpen={paymentIsOpen}
            onRequestClose={closeModal}
            /> */}
            <div className="pl-8">
            <Share />
            </div>
        </div>
        </div>
    </div>
  );
};


export const RetrievedCard  = ({
    image_url,
    uesrname,
    description,

}) => {
    return (
        <>
        <div className='flex flex-col'>
        <span className="flex flex-row gap-x-2 pb-2 inline-block border-[#fff]  text-[#18E074] bg-none text-[0.7rem] font-semibold rounded-[0.65rem] text-xs dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-[7rem]"> <LinkIcon />  RETRIEVED</span>
        <div className='relative flex rounded-[1.25rem] w-[18rem] h-[25rem] ' style={{ backgroundImage: `url(${LostParrot})`, backgroundSize: 'cover' }} >
        <div className='absolute inset-0 rounded-[1.25rem] w-[18rem] h-[25rem] bg-[#00000075]'></div>

            <div className='self-end bg-[#86868625] p-4 w-[18rem]  rounded-b-[1.25rem]  absolute bottom-0 -z-1'>
            <div className='flex flex-row gap-6  '>
                <img src="" alt="userpic" className='bg-[#000] row-span-2 w-10 h-10 rounded-full'/>
                <div className='flex flex-col'>
                    <span className='text-[#ffffff] font-light text-[0.9rem] w-44 max-w-44 overflow-hidden'>{uesrname}</span>
                    <span className='text-[#ffffff85] font-light text-[0.75rem] w-44 max-w-44' >{description}</span> 
                </div>     
            </div>

            </div>

        </div>
      </div>
      </>
    );
}

