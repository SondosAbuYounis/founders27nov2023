import React, { useState, useEffect } from "react";
import axios from "axios";
import { useModal } from "../../hooks/useContext/ModalContext";
import Modal from "react-modal";
import UpdateUserDataModal from "./UpdateUserDataModal";

Modal.setAppElement(document.getElementById("root"));

export const UserDataTwo = ({  isOpen, onRequestClose}) => {
  const { modalIsOpen, openModal, closeModal } = useModal();

  const defaultImageURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAh0lEQVR42mP4z/CfPwMDAzMDP//PAAmgsHk1Ab0AAAAASUVORK5CYII=";
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch user data based on the user's ID
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users?user_id=1"
        );
        setUserData(response.data[0]);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div className="mt-12 p-16 bg-[#86868673] w-[20rem] h-[50rem] rounded-r-[1.25rem] flex flex-col">
        <div className="flex flex-row gap-6 ">
          <img
            src={userData.profileImage || defaultImageURL}
            alt="userpic"
            className="bg-[#000] row-span-2 w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
              {userData.username}{" "}
            </span>
            <span className="text-[#00000085] font-light text-[0.75rem] hover:underline flex gap-20 items-center">
              {userData.country} - {userData.city}{" "}
            </span>
          </div>
        </div>
        <div className="mt-8 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
          {userData.email}{" "}
        </div>
        <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
        <div className=" mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
          {userData.phonenumber}{" "}
        </div>
        <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
        <div className=" mt-8 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center" onClick={() => openModal()} >
          Update my Info
        </div>
        <UpdateUserDataModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}/>
      </div>
    </>
  );
};
