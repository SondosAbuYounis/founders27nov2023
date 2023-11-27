import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileAvatar = ({ oldProfileImage, username }) => {
  const [avatarImage, setAvatarImage] = useState("");

  useEffect(() => {
    // Set the avatar image based on the prop when it changes
    setAvatarImage(oldProfileImage);
  }, [oldProfileImage]);

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

        const response = await axios.put(
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

  return (
    <div className="bg-white p-8 text-blue text-center  shadow-sm ">
      <img
        src={avatarImage}
        alt="Profile Avatar"
        className="w-24 h-24  mx-auto mb-4  object-cover"
      />
      <h2 className="text-xl font-bold">{username}</h2>
      <input
        type="file"
        id="profileImageInput"
        accept="image/*"
        className=""
        onChange={handleUpdateImage}
      />

      {/* <button
        onClick={handleUpdateImage}
        className="bg-blue text-white px-4 py-2 mt-4 rounded-md font-medium"
      >
        Update Image
      </button> */}
    </div>
  );
};

export default ProfileAvatar;
