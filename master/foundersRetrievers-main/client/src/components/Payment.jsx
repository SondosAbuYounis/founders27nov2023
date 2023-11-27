import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Await } from "react-router-dom";

import Modal from "react-modal";
import { Cancel } from "../assets/icons/IconsSVGConst";
import { DeliveryAlertFound } from "./DeliveryAlertFound";
import { useModal } from "../../src/hooks/useContext/ModalContext";
import { ConfirmContact } from "./uiPrimitives/ConfirmContact";

Modal.setAppElement(document.getElementById("root"));

const Payment = ({ isOpen, onRequestClose }) => {
  const { modalIsOpen, openModal } = useModal();
  const [confirmContactIsOpen, setConfirmContactIsOpen] = useState(false);

  // const openConfirmContact = () => {
  //   setConfirmContactIsOpen(true);
  // };
  const closeModal = () => {
    setConfirmContactIsOpen(false);
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff10", // Set the overlay background color with transparency
      zIndex: 1000, // Set the z-index for the overlay
    },
    content: {
      backgroundColor: "transparent",
      border: "none",
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
  // Form div style
  const FormDivStyle = {
    // margin : '5rem',
    // marginLeft : '5rem',
    margin: "5rem",
    // padding : '5rem',
    display: "flex",
    flexDirection: "column",
    backgroundPosition: "center",
    alignItems: "center",
    justifyContent: "center",
    // backgroundImage: `url(${deadseatwo})`,
    backgroundSize: "cover",
    borderRadius: "2rem",
  };
  // Form style
  const FormStyle = {
    display: "grid",
    flexDirection: "row",
    gridColumns: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "2rem",
    padding: "2rem",
  };
  // Error messages
  const erroMessage = {
    fontSize: "0.65rem",
    padding: "0.5rem",
    color: "#FF0000",
    maxWidth: "15rem",
    textAlign: "start",
  };
  // Invalid Credintials
  const invalidCredintials = {
    fontSize: "1rem",
    padding: "0.5rem",
    color: "#FF0000",
    maxWidth: "20rem",
    textAlign: "start",
  };

  const [formData, setFormData] = useState({
    username: "",
    phonenumber: "",
    email: "",
    country: "",
    zip: "",
    cardnumber: "",
    cardyear: "",
    cardcvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the server for authentication
    axios
      .post("/api/login", formData)
      .then((response) => {
        setConfirmContactIsOpen(true);

        // add navigation and successfully signed in
      })
      .catch((error) => {
        setError("Failed to complete payment. Please try again.");
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} style={modalStyle} onRequestClose={onRequestClose}>
        <div style={FormDivStyle}>
          <div className="p-8 grid grid-col-3 justify-items-stretch  pr-28 pl-28 bg-[#373737] rounded-[2rem] w-[60rem] ">
            <button onClick={onRequestClose} className="flex justify-end">
              <Cancel />
            </button>
            <div className="col-span-3 justify-self-center text-[2.25rem] font-extralight pb-12 pt-8 text-[#fff]">
              Payment
            </div>
            <form
              onSubmit={handleSubmit}
              style={FormStyle}
              className="grid grid-cols-3 gap-12"
            >
              <div>
                {/* Fixed amount of payment == 5 JD   */}

                {/* <label></label>
                <input
                type="text"
                name="username"
                style={inputBorderStyle}
                value={formData.username}
                onChange={handleChange}
                placeholder='Full Name'
                className='placeholder-[#CDCDCD84] mb-4 font-light'
                required
                /> */}

                <label></label>
                <input
                  type="email"
                  name="email"
                  style={inputBorderStyle}
                  placeholder="email"
                  className="placeholder-[#CDCDCD84] mb-4 font-light"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label className="	font-light mb-1 text-[#CDCDCD84]">
                  Country details
                </label>
                <label htmlFor="" className="flex flex-row gap-4 ">
                  <select
                    name=""
                    id=""
                    className="w-24 mb-4  bg-transparent text-[#CDCDCD95]  "
                    required
                    onChange={handleChange}
                  >
                    <option value={formData.country}>Country</option>
                    <option value={formData.country}>Jordan</option>
                  </select>
                </label>

                {/* <label className='	font-light mb-1 text-[#CDCDCD84]'>ZIP number</label>
            <input
            type="integer"
            name="zip"
            style={inputBorderStyle}
            placeholder='000000'
            value={formData.zip}
            onChange={handleChange}
            className='placeholder-[#CDCDCD84] mb-4 font-light'
            required
            /> */}
              </div>
              <div className="border-r border-[#ffffff85] w-28 h-80"></div>

              <div className="">
                <div className="	text-center font-light mb-8 text-[#fff] text-[1.25rem] ">
                  Card details
                </div>

                <label className="	font-light  text-[#CDCDCD] ">
                  Card number
                </label>
                <input
                  type="integer"
                  name="cardnumber"
                  style={inputBorderStyle}
                  placeholder="000 000 000 000"
                  value={formData.cardnumber}
                  onChange={handleChange}
                  className="placeholder-[#CDCDCD84] mb-4 font-light"
                  required
                />
                <label></label>
                <input
                  type="date"
                  name="cardyear"
                  style={inputBorderStyle}
                  placeholder="mm/yy"
                  value={formData.cardyear}
                  onChange={handleChange}
                  className="placeholder-[#CDCDCD84] mb-4 font-light"
                  required
                />

                <label></label>
                <input
                  type="integer"
                  name="cardcvc"
                  style={inputBorderStyle}
                  placeholder="CVC"
                  value={formData.cvc}
                  onChange={handleChange}
                  className="placeholder-[#CDCDCD84] mb-4 font-light"
                  required
                />
              </div>

              <button
                type="submit"
                className=" px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737] text-xs  rounded-lg text-xs px-5 py-2 mt-8 mb-8 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Confirm Payment
              </button>
              {error && <div style={invalidCredintials}>{error}</div>}
            </form>

            {/* <input type="checkbox" required ></input>
        <label htmlFor=""className='col-span-3 text-[0.75rem] mb-1 mt-8 justify-self-center place-items-center text-[#CDCDCD]'>By signing up, you agree to our Terms of Use and acknowledge you’ve read our Privacy Policy. </label> */}
          </div>
        </div>
      </Modal>
      <ConfirmContact
        isOpen={confirmContactIsOpen}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default Payment;
