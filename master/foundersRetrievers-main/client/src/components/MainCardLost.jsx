import React from "react";
import { Calendar, Minus, Plus, Share } from "../assets/icons/IconsSVGConst";
import { Comment } from "./uiPrimitives/Comment";
import { Location } from "../assets/icons/IconsSVGConst";
import { FoundItBtn } from "./uiPrimitives/FoundItBtn";

import Modal from "react-modal";
Modal.setAppElement(document.getElementById("root"));

export const MainCardLost = (cardData, isOpen, onRequestClose, children) => {
  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff10",
      zIndex: 100,
    },
  };
  return (
    <Modal
      className="flex flex-col"
      style={modalStyle}
      onRequestClose={onRequestClose}
      isOpen={isOpen}
    >
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
              Caroline
              <span className="block text-[#CDCDCD85] font-light text-[0.75rem]">
                Amman
              </span>{" "}
            </div>
            <div className="pt-[0.3rem] pl-16 text-end text-[#CDCDCD] font-light text-[0.65rem]">
              21:00 pm <span className="block">11 Nov 2023</span>
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
          <FoundItBtn />
          <div className="pl-8">
            <Share />
          </div>
        </div>
        <button onClick={onRequestClose}>Close Modal</button>
      </div>
    </Modal>
  );
};
