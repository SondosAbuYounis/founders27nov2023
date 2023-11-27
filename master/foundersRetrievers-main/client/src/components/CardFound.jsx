import React from "react";
import { MineBtn } from "./uiPrimitives/MineBtn";
import { Calendar, Plus, Share } from "../assets/icons/IconsSVGConst";
import { Comment } from "./uiPrimitives/Comment";
import { Location } from "../assets/icons/IconsSVGConst";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const CardFound = ({
  cardData,
  isOpen,
  onRequestClose,
  children,
  description,
  username,
  city,
  created_at,
  date_found,

}) => {
  //   const { name, city, publish_day, description, found_location, day, image } =
  //     cardData;

  //   const { user_id } = useParams();
  //   const [found, setFound] = useState(null);

  //   useEffect(() => {
  //     axios.get(`http://localhost:3000/Founds/${user_id}`)
  //           .then ((response)=>{
  //             setFound(response.data[0]);
  //         })
  //         .catch ((error) => {
  //           console.error("Error fetching data: ", error);
  //         });
  //     }, []);

  //   if (!found) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div
      className=" left-[30rem] flex flex-col"
      
    >
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
              {username}
              <span className="block text-[#CDCDCD85] font-light text-[0.75rem]">
                {city}
              </span>{" "}
            </div>
            <div className="pt-[0.3rem] pl-16 text-end text-[#CDCDCD] font-light text-[0.65rem]">
              21:00 pm <span className="block">
                {created_at}
                </span>
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
                {date_found}
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
          <MineBtn />
          <div className="pl-8">
            <Share />
          </div>
        </div>
      </div>
    </div>
  );
};
