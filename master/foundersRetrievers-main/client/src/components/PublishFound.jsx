import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Cancel, MinusRed, Plus, PlusYellow } from "../assets/icons/IconsSVGConst";
import { LinkIcon } from "../assets/icons/IconsSVGConst";
import { Navigate, useNavigate  } from "react-router-dom";


import Modal from "react-modal";
Modal.setAppElement(document.getElementById("root"));

export const PublishFound = ({ isOpen, onRequestClose }) => {
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
    type: "Found",
    title: "",
    description: "",
    category: "",
    country: "",
    city: "",
    date_found: "",
    imageurl,
  });


  //////////////////////// HANDLE IMAGE //////////////////////////////
  const [avatarImage, setAvatarImage] = useState("");

  const handleUpdateImage = async () => {

    try {
      // Implement a file input in your form to let the user choose a new image
      const fileInput = document.getElementById("profileImageInput");
      const newProfileImage = fileInput.files[0];

      // If a new image is selected, send it using Axios
      if (newProfileImage) {
        const formData = new FormData();
        formData.append("image", newProfileImage);
        // Add any additional data you need to send
        // formData.append("userId", userId);

        const response = await axios.post(
          "http://localhost:5000/updateuser",
          formData
        );

        // Update the state with the new profile image URL
        setAvatarImage(response.data.profileImage);
        console.log("Profile image updated successfully!");
        window.location.reload();
      } else {
        console.log("No new image selected.");
      }
    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (s, key) => {
    const file = s.target.files[0];
    setFormData(prevData => ({
      ...prevData,
      [key]: file
    }));
  };
  const formDataToSend = new FormData();
  for (const key in formData) {
    formDataToSend.append(key, formData[key]);
  }
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
      .post("http://localhost:3000/itemfound", formData)
      .then((response) => {
        // Navigate to profile page or feedpage
        console.log(formData);
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
          imageurl,
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
          enctype="multipart/form-data"
        >
              <div className="flex flex-row justify-between	">
          <span className=" w-32 flex flex-row inline-block gap-x-2 px-[0.75rem] pb-2 hover:text-[#FBE62E] bg-none border border-2 hover:border-[#FBE62E]  focus:outline-none text-[#FFFFFF] text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <PlusYellow /> I’VE FOUND
          </span>
          <button onClick={onRequestClose} className=" flex justify-end">
          <Cancel />
        </button>
        </div>

          <label className="self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD]">
            Please fill the following information regarding the belonging you
            found{" "}
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
            Where and when did you find it !
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
              name="date_found"
              value={formData.date_found}
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
          <input  type="file"
        id="profileImageInput"
        accept="image/*"
        className=""
        value={formData.imageurl}
        onChange={handleUpdateImage}
          />

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
