import React from 'react'
import { MainCardFound } from "../MainCardFound"


export const BgNotSignedIn = () => {
  return (
    <>
     <div className="flex flex-row justify-between mt-12 mb-12">
            {/* Side bar */}
            <div className="mt-12 p-16 bg-[#86868673] w-[20rem] h-[50rem] rounded-r-[1.25rem] flex flex-col">
              <div className="flex flex-row gap-6 ">
                <img
                  src=""
                  alt="userpic"
                  className="bg-[#000] row-span-2 w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
                    Caroline {/* <Edit/> */}{" "}
                  </span>
                  <span className="text-[#00000085] font-light text-[0.75rem] hover:underline flex gap-20 items-center">
                    Amman {/* <Edit/> */}{" "}
                  </span>
                </div>
              </div>
              <div className="mt-8 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
                Email
              </div>
              <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
              <div className=" mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
                Phone{" "}
              </div>
              <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
              <div className=" mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
                Password
              </div>
              <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
            </div>

            {/* My Posts  */}
            <div className="mt-16">
              <div className="text-[#000] font-light text-[0.9rem] flex gap-16 items-center">
                My posts{" "}
              </div>
              <hr className=" w-[44rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
              <div className="flex flex-row justify-center items-center gap-12 mb-28 mt-12">
                <MainCardFound />
                <MainCardFound />
              </div>
            </div>

            {/* Filter  */}
            <div className="mt-12 p-16 bg-[#86868673] w-[20rem] h-[50rem] rounded-l-[1.25rem] flex flex-col gap-4">
              <ul className="flex flex-col">
                {" "}
                Lists
                <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
                <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
                  My Losts
                </li>
                <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
                  My Founds{" "}
                </li>
                <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
                  All linked
                </li>
                <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
                  Donate
                </li>
                {/* <li className='text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center'>All posts from website</li> */}
                <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
                  All posts from website
                </li>
              </ul>
              <ul className="flex flex-col mt-4">
                {" "}
                Filter by
                <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
                <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
                  <select name="" id="" className="">
                    <option value="">CATEGORY</option>
                    <option value="">Animal</option>
                  </select>
                </li>
                <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
                  <select name="" id="">
                    <option value="">CITY</option>
                    <option value="">Amman</option>
                    <option value="">Zarqaa</option>
                  </select>
                </li>
                <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
                  <select name="" id="">
                    <option value="">DATE</option>
                    <option value="">aug 2023</option>
                    <option value="">sep 2023</option>
                    <option value="">oct 2023</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
    </>
  )
}
