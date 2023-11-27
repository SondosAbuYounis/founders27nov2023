import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Cancel, MinusRed, Plus, PlusYellow } from "../assets/icons/IconsSVGConst";
import { LinkIcon } from "../assets/icons/IconsSVGConst";
import { Navigate, useNavigate  } from "react-router-dom";
import Connection from '../assets/clips/Connection.png';




import Modal from "react-modal";
Modal.setAppElement(document.getElementById("root"));

export const GetInTouch = ({ isOpen, onRequestClose }) => {
    // const modalStyle = {
    //     overlay: {
    //       backgroundColor: "#ffffff50", // Set the overlay background color with transparency
    //       zIndex: 1000, // Set the z-index for the overlay
    //     },
    //   };
  // Input border style
  const inputBorderStyle = { 
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #CDCDCD84",
    placeholder: "#CDCDCD84",
    color: "white",
  };
  // Sending form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Get categories data
  const [error, setError] = useState("");
  const [categories, setCategoriesData] = useState([]);
  useEffect(() => {
    // End point CATEGORY
    axios
      .get("/api/login")
      .then((response) => {
        setCategoriesData(response.data);
      })
      .catch((error) => {
        setError("Can not get data", error);
      });
  }, []);

  const navigate = useNavigate();


  // Post-Send form data
  const handleSubmit = (e) => {
    e.preventDefault();
    // End point
    axios
      .post("http://localhost:3000/addComment", formData)
      .then((response) => {
        // Navigate to profile page or feedpage
        navigate("/");
        // alert successful submission
        // window.location.href = '/card/:id';
        setFormData({
            full_name: "",
            email: "",
            message: "",
        });
      })
      .catch((error) => {
        setError("Something went wrong");
      });
  };

  return (
    <>
    <div className="flex justify-center pt-20 pb-20">
      <div
        className="p-12 bg-[#373737] rounded-[1rem] w-[52rem] h-[53rem] "
      >
      {/* <div
        className=" absolute left-[25rem]  p-12 bg-[#373737] rounded-[1rem] w-[50rem] h-[45rem] "
      > */}
      <div className="flex flex-col items-center">
        <img src={`${Connection}`} alt="" className="h-[18rem] w-[27rem]"/>     
        <div className="text-[2.25rem] font-extralight pb-16 pt-4 text-[#fff]">Get in touch</div>
        </div>  

        <form
          onSubmit={handleSubmit}
          className="flex flex-col align-start justify-start gap-4 "
        >

          <label></label>
          <input
            type="text"
            name="full_name"
            style={inputBorderStyle}
            value={formData.full_name}
            onChange={handleChange}
            placeholder="Caroline Addams"
            className="placeholder-[#CDCDCD84] mb-4 font-light"
            required
          />
          <label></label>
          <input
            type="email"
            name="email"
            style={inputBorderStyle}
            value={formData.email}
            onChange={handleChange}
            placeholder="carolineaddams@gmail.com"
            className="placeholder-[#CDCDCD84] mb-4 font-light"
            required
          />

          {/* <label
            htmlFor=""
            className="self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]"
          >
            Attach images of the item
          </label>
          <input type="file" value={formData.image} /> */}

          {/* max number of letters */}
          <label
            htmlFor=""
            className="self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD]"
          >
            What's on your mind
          </label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="h-[7rem] rounded-[0.65rem] bg-[#CDCDCD95]"
          />

          <button
            type="submit"
            className=" self-end text-center w-28 px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737]  rounded-lg text-[1rem] px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Publish
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

