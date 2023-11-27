import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FoundItBtn } from "./uiPrimitives/FoundItBtn";
import { NotSignedIn } from "./uiPrimitives/NotSignedIn";
import { MineBtn } from "./uiPrimitives/MineBtn";
import { useModal } from "../hooks/useContext/ModalContext";
import { MainCardFound } from "./MainCardFound";
import { Comment } from "./uiPrimitives/Comment";
import { Location } from "../assets/icons/IconsSVGConst";
import { Calendar, Minus, Plus, Share } from "../assets/icons/IconsSVGConst";

import { useModal } from "../../src/hooks/useContext/ModalContext"
import Modal from "react-modal";
import { CardFound } from "./CardFound";
// import { DeliveryAlertFound } from "./DeliveryAlertFound";
import { ConfirmContact } from "./uiPrimitives/ConfirmContact";
Modal.setAppElement(document.getElementById("root"));

export const FeedAllData = () => {
  const { modalIsOpen, openModal, closeModal } = useModal();
  const [dataFromFirstAPI, setDataFromFirstAPI] = useState([]);
  const [dataFromSecondAPI, setDataFromSecondAPI] = useState([]);
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  const [filterCountry, setFilterCountry] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterType, setFilterType] = useState("all"); // "all", "linked", "founds", "losts"

  useEffect(() => {
    // GET data from LOSTS
    axios
      .get("http://localhost:3000/losts")
      .then((response) => {
        setDataFromFirstAPI(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from the first API:", error);
      });

    // GET data from FOUNDS
    axios
      .get("http://localhost:3000/Founds")
      .then((response) => {
        setDataFromSecondAPI(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from the second API:", error);
      });
  }, []);

  const combinedData = [];

  for (
    let i = 0;
    i < Math.max(dataFromFirstAPI.length, dataFromSecondAPI.length);
    i++
  ) {
    if (dataFromFirstAPI[i]) {
      combinedData.push({ type: "losts", data: dataFromFirstAPI[i] });
    }

    if (dataFromSecondAPI[i]) {
      combinedData.push({ type: "found", data: dataFromSecondAPI[i] });
    }
  }

  const filteredData = combinedData
  .filter((item) => !filterCountry || item.data.country === filterCountry)
  .filter((item) => !filterCity || item.data.city === filterCity)
  .filter((item) => !filterDate || item.data.date_found === filterDate)
  .filter((item) =>
    filterType === "all"
      ? true
      : filterType === "linked"
      ? item.data.type === "linked"
      : filterType === "founds"
      ? item.type === "found"
      : filterType === "losts"
  );

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center gap-12 mb-28">
        {/* Add filter components here */}
        {/* e.g., <FilterCountry onChange={setFilterCountry} /> */}
        {/* e.g., <FilterCity onChange={setFilterCity} /> */}
        {/* e.g., <FilterDate onChange={setFilterDate} /> */}
        {/* e.g., <FilterType onChange={setFilterType} /> */}

        {filteredData.map((item, user_id) => (
          <div className="max-w-screen-2xl m-0 overflow-hidden relative">
            {item.type === "losts" ? (
              <div key={item.user_id} className="flex flex-col">
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
                        {item.type}
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
                    <button onClick={() => openModal}>
                      <FoundItBtn />
                    </button>
                    <ConfirmContact
                      isOpen={modalIsOpen }
                      onRequestClose={closeModal}
                    />

                    <div className="pl-8">
                      <Share />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
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
                        {item.username}
                        <span className="block text-[#CDCDCD85] font-light text-[0.75rem]">
                          {item.city}
                        </span>{" "}
                      </div>
                      <div className="pt-[0.3rem] pl-16 text-end text-[#CDCDCD] font-light text-[0.65rem]">
                        21:00 pm{" "}
                        <span className="block">{item.created_at}</span>
                      </div>
                    </div>
                    <hr className="w-56 content-end m-2 border-[#CDCDCD50] border-dashed  sm:mx-auto dark:border-gray-700" />
                    <span className="text-[#CDCDCD] text-start font-light text-[0.75rem]">
                      {item.description}
                      <span className="block text-start flex gap-2 items-center ">
                        <Location />
                        {item.city} II
                        <span className="inline-block ml-4 flex gap-2 items-center ">
                          <Calendar />
                          {item.date_found}
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
            )}
          </div>
        ))}
      </div>
    </>
  );
};
