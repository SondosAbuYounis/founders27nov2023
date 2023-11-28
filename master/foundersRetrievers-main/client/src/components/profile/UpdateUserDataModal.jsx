import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Cancel } from "../../assets/icons/IconsSVGConst";
////////JWT///////////
import { UseUser } from "../../hooks/useContext/UserContext";

Modal.setAppElement(document.getElementById("root"));

const UpdateUserDataModal = ({ isOpen, onRequestClose }) => {
  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff50",
      zIndex: 5,
      border: "none",
    },
  };

  const defaultImageURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAh0lEQVR42mP4z/CfPwMDAzMDP//PAAmgsHk1Ab0AAAAASUVORK5CYII=";

  // const [userData, setUserData] = useState({
  //   user_id: "",
  //   username: "",
  //   country: "",
  //   city: "",
  //   email: "",
  //   phonenumber: "",
  //   password: "",
  //   // Add other fields as needed
  // });

  // const [editedUsername, setEditedUsername] = useState("");
  // const [editedCity, setEditedCity] = useState("");
  // const [editedCountry, setEditedCountry] = useState("");
  // const [editedEmail, setEditedEmail] = useState("");
  // const [editedPhoneNumber, setEditedPhoneNumber] = useState("");
  // const [editedPassword, setEditedPassword] = useState("");
  // const [editedImage, setEditedImage] = useState("");

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/users?user_id=1");
  //       const fetchedUserData = response.data[0];

  //       setUserData({
  //         user_id: fetchedUserData.user_id,
  //         username: fetchedUserData.username,
  //         country: fetchedUserData.country,
  //         city: fetchedUserData.city,
  //         email: fetchedUserData.email,
  //         phonenumber: fetchedUserData.phonenumber,
  //         password: fetchedUserData.password,
  //         // Add other fields as needed
  //       });
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // const handleUpdateInfo = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Make a request to update the user data
  //     const response = await axios.put("http://localhost:3000/api/update-profile", {
  //       user_id: userData.user_id, // Include the user_id in the request
  //       username: editedUsername,
  //       country: editedCountry,
  //       city: editedCity,
  //       email: editedEmail,
  //       phonenumber: editedPhoneNumber,
  //       password: editedPassword,
  //       // Include any other fields you want to update
  //     });

  //     // Handle the response from the server
  //     console.log("Update successful", response.data);

  //     // Optionally, you can fetch the updated user data from the server
  //     // and update the state with the new data
  //     const updatedUserData = await axios.get("http://localhost:3000/users?user_id=1");
  //     const fetchedUserData = updatedUserData.data[0];

  //     setUserData({
  //       user_id: fetchedUserData.user_id,
  //       username: fetchedUserData.username,
  //       country: fetchedUserData.country,
  //       city: fetchedUserData.city,
  //       email: fetchedUserData.email,
  //       phonenumber: fetchedUserData.phonenumber,
  //       password: fetchedUserData.password,
  //       // Add other fields as needed
  //     });
  //   } catch (error) {
  //     console.error("Error updating profile", error);
  //     // Handle errors here
  //   }
  // };

  const { user } = UseUser();

  const [userData, setUserData] = useState({
    user_id: "",
    username: "",
    country: "",
    city: "",
    email: "",
    phonenumber: "",
    password: "",
    // Add other fields as needed
  });

  const [editedUsername, setEditedUsername] = useState("");
  const [editedCity, setEditedCity] = useState("");
  const [editedCountry, setEditedCountry] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("");
  const [editedPassword, setEditedPassword] = useState("");
  const [editedImage, setEditedImage] = useState(null); // Use null to represent no change in the image

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users?user_id=${user.user_id}`
        );
        const fetchedUserData = response.data[0];

        setUserData({
          user_id: fetchedUserData.user_id,
          username: fetchedUserData.username,
          country: fetchedUserData.country,
          city: fetchedUserData.city,
          email: fetchedUserData.email,
          phonenumber: fetchedUserData.phonenumber,
          password: fetchedUserData.password,
          // Add other fields as needed
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user]);

  const handleUpdateInfo = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Append the updated user data
      formData.append("username", editedUsername || userData.username);
      formData.append("country", editedCountry || userData.country);
      formData.append("city", editedCity || userData.city);
      formData.append("email", editedEmail || userData.email);
      formData.append("phonenumber", editedPhoneNumber || userData.phonenumber);
      formData.append("password", editedPassword || userData.password);

      // Append the updated image if available
      if (editedImage) {
        formData.append("image", editedImage, editedImage.name);
      }

      // Make a request to update the user data
      const response = await axios.put(
        `http://localhost:3000/api/update-profile/${user.user_id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
          },
        }
      );

      // Handle the response from the server
      console.log("Update successful", response.data);

      // Optionally, you can update the state with the new data
      setUserData({
        ...userData,
        username: editedUsername || userData.username,
        country: editedCountry || userData.country,
        city: editedCity || userData.city,
        email: editedEmail || userData.email,
        phonenumber: editedPhoneNumber || userData.phonenumber,
        password: editedPassword || userData.password,
        // Add other fields as needed
      });

      // Clear the edited image state
      setEditedImage(null);
    } catch (error) {
      console.error("Error updating profile", error);
      // Handle errors here
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setEditedImage(selectedImage);
  };

  return (
    <Modal
      className="absolute top-12 left-[30rem]  gap-8 p-12 bg-[#373737] rounded-[1rem] w-[38rem] h-[40rem] "
      isOpen={isOpen}
      style={modalStyle}
      onRequestClose={onRequestClose}
      contentLabel="Update User Info Modal"
    >
      <div className="flex flex-col">
        <button onClick={onRequestClose} className="self-end">
          <Cancel />
        </button>
        <div className="self-center justify-self-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="19.5" stroke="#E83434" />
            <path
              d="M20 11V22"
              stroke="#E83434"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M20 27V29"
              stroke="#E83434"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="text-[2.25rem] text-center font-extralight text-[#fff]">
        Update My Info
      </div>

      <form className="flex flex-col justify-center items-center">
        <label htmlFor="">Image</label>
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          src={defaultImageURL}
          className="bg-[#86868673] p-1 mb-1 rounded-full w-[5rem]"
          // onChange={(e) => setEditedImage(e.target.files[0])}
        />

        {/* <img
          src={userData.profileImage || defaultImageURL}
          alt="userpic"
          className="bg-[#000] row-span-2 w-10 h-10 rounded-full"
        /> */}

        <label htmlFor="">Name</label>
        <input
          type="text"
          className="bg-[#ffffff70] p-1 mb-1 rounded-[0.25rem] w-[10.5rem]"
          value={editedUsername || userData.username}
          onChange={(e) => setEditedUsername(e.target.value)}
        />

        <label htmlFor="">Country</label>
        <input
          type="text"
          className="bg-[#ffffff70] p-1 rounded-[0.25rem] w-[10.5rem]"
          value={editedCountry || userData.country}
          onChange={(e) => setEditedCountry(e.target.value)}
        />

        <label htmlFor="">City</label>
        <input
          type="text"
          className="bg-[#ffffff70] p-1 rounded-[0.25rem] w-[10.5rem]"
          value={editedCity || userData.city}
          onChange={(e) => setEditedCity(e.target.value)}
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          className="bg-[#ffffff70] p-1 rounded-[0.25rem] "
          value={editedEmail || userData.email}
          onChange={(e) => setEditedEmail(e.target.value)}
        />

        <label htmlFor="">Phone Number</label>
        <input
          type="text"
          className="bg-[#ffffff70] p-1 rounded-[0.25rem] "
          value={editedPhoneNumber || userData.phonenumber}
          onChange={(e) => setEditedPhoneNumber(e.target.value)}
        />

        <label htmlFor="" className="text-[#000] font-light text-[0.9rem] ">
          Password
        </label>
        <input
          type="text"
          className="bg-[#ffffff70] p-1 rounded-[0.25rem] "
          value={editedPassword || userData.password}
          onChange={(e) => setEditedPassword(e.target.value)}
        />

        <button
          type="submit"
          className="text-center mt-4 text-[#fff] font-light text-[0.9rem] border border-[#fff]  hover:bg-[#ffffff50] rounded-[0.5rem] p-1 w-[10rem]"
          onClick={handleUpdateInfo}
        >
          Save Changes
        </button>
      </form>
    </Modal>
  );
};

export default UpdateUserDataModal;
