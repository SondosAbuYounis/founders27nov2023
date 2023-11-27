import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Cancel,
  MinusRed,
  Plus,
  PlusYellow,
} from "../assets/icons/IconsSVGConst";
import { LinkIcon } from "../assets/icons/IconsSVGConst";
import { Navigate, useNavigate  } from "react-router-dom";


import Modal from "react-modal";
Modal.setAppElement(document.getElementById("root"));

export const PublishLost = ({ isOpen, onRequestClose }) => {
  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff50", // Set the overlay background color with transparency
      zIndex: 1000, // Set the z-index for the overlay
    },
  };
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
    type: "lost",
    title: "",
    description: "",
    category: "",
    country: "",
    city: "",
    date_lost: "",
    imageurl: "",
  });
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Get Lost items data
  const [error, setError] = useState("");
  const [categories, setCategoriesData] = useState([]);
  useEffect(() => {
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
      .post("http://localhost:3000/itemlost", formData)
      .then((response) => {
        // Navigate to profile page or feedpage
        navigate("/");        
        // alert successful submission
        // window.location.href = '/card/:id';
        setFormData({
          title: "",
          description: "",
          category: "",
          country: "",
          city: "",
          date_found: "",
          imageurl: "",
        });
      })
      .catch((error) => {
        setError("Something went wrong");
      });
  };

  return (
    <>
      <Modal
        className=" absolute left-[25rem]  p-12 bg-[#373737] rounded-[1rem] w-[50rem] h-[45rem] "
        isOpen={isOpen}
        style={modalStyle}
        onRequestClose={onRequestClose}
      >
       

        <form
          onSubmit={handleSubmit}
          className="flex flex-col align-start justify-start gap-4 "
        >
            <div className="flex flex-row justify-between	">
          <label className="w-32 mb-8 flex flex-row align-center inline-block gap-x-2 px-[1rem] pb-2 text-[#E83434] bg-none border border-2 border-[#E83434] text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <MinusRed />
            I’VE LOST
          </label>
          <button onClick={onRequestClose} className=" flex justify-end">
          <Cancel />
        </button>
        </div>
          <label className="self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD]">
            Please fill the following information regarding the belonging you
            Lost{" "}
          </label>

          <label></label>
          <input
            type="text"
            name="title"
            style={inputBorderStyle}
            value={formData.title}
            onChange={handleChange}
            placeholder="What did you find !!"
            className="placeholder-[#CDCDCD84] mb-4 font-light"
            required
          />

          <label className="self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]">
            Under what category does it fall !
          </label>

          <select
            name="category"
            id=""
            className="w-32 bg-transparent text-[#CDCDCD95]"
            onChange={handleChange}
            // required
          >
            <option value="">All categories</option>
            {categories.map((item) => (
              <option key={item.id} value={item.category}>
                Animal {/*{categories.category}*/}
              </option>
            ))}
          </select>

          <label className="self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]">
            Where and when did you lost it !
          </label>
          <label htmlFor="" className="flex flex-row gap-4">
            <select
              name="country"
              id=""
              className="w-24 bg-transparent text-[#CDCDCD95]"
              onChange={handleChange}
              required
            >
              <option value="">Country</option>
              <option value="Jordan">Jordan</option>
            </select>
            <select
              name="city"
              id=""
              className="w-24 bg-transparent text-[#CDCDCD95]"
              onChange={handleChange}
              required
            >
              <option value="">City</option>
              <option value="Amman">Amman</option>
              <option value="Zarqaa">Zarqaa</option>
            </select>
            <input
              type="date"
              name="date_lost"
              value={formData.date_lost}
              onChange={handleChange}
              className="w-32 bg-transparent text-[#CDCDCD95]"
              required
            />
          </label>

          <label
            htmlFor=""
            className="self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]"
          >
            Attach images of the item
          </label>
          <input type="file" value={formData.image} />

          {/* max number of letters */}
          <label
            htmlFor=""
            className="self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]"
          >
            Write notes/ description to others
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
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
      </Modal>
    </>
  );
};
