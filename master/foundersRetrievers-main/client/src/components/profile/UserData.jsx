import React, { useState, useEffect } from "react";
import axios from "axios";
////////////////JWT/////////////////
import { UseUser } from "../../hooks/useContext/UserContext";



export const UserData = () => {
  const defaultImageURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAh0lEQVR42mP4z/CfPwMDAzMDP//PAAmgsHk1Ab0AAAAASUVORK5CYII=";

  const [userData, setUserData] = useState({});

  const [profileImage, setProfileImage] = useState(null);

  // useEffect(() => {
  //   // Fetch user data based on the user's ID
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:3000/users?user_id=1"
  //       );
  //       setUserData(response.data[0]);
  //       console.log(userData);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, [userData]); 


  /////////JWT //////////////
  const { user } = UseUser();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const response = await axios.get("http://localhost:3000/user-profile", {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });

          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user]);



  // State variables for editable fields
  const [editedUsername, setEditedUsername] = useState(userData.username);
  const [editedCity, setEditedCity] = useState(userData.city);
  const [editedCountry, setEditedCountry] = useState(userData.country);
  const [editedEmail, setEditedEmail] = useState(userData.email);
  const [editedPhoneNumber, setEditedPhoneNumber] = useState(
    userData.phonenumber
  );
  const [editedPassword, setEditedPassword] = useState(userData.password);
  const [editedImage, setEditedImage] = useState(userData.image_url);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateInfo = () => {
    try {
      // Make a request to your server endpoint
      const response = axios.put("/api/update-profile", {
        username: editedUsername,
        country: editedCountry,
        city: editedCity,
        email: editedEmail,
        phonenumber: editedPhoneNumber,
        password: editedPassword,
        // Include any other fields you want to update
      });

      // Handle the response from the server
      console.log("Update successful", response.data);

      // Reset the isEditing state to false after updating
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile", error);
      // Handle errors here
    }

    console.log("Updated Username:", editedUsername);
    console.log("Updated City:", editedCity);
    console.log("Updated Email:", editedEmail);
    console.log("Updated Phone Number:", editedPhoneNumber);
  };

  return (
    <div className="mt-12 p-16 bg-[#86868673] w-[20rem] h-[50rem] rounded-r-[1.25rem] flex flex-col">
        <div className="flex flex-row gap-6">
          {isEditing ? (
            <>
              <label htmlFor="">Image</label>
              <input
                type="file"
                src={defaultImageURL}
                className="bg-[#86868673] p-1 mb-1 rounded-full w-[5rem]"
                onChange={(e) => setEditedImage(e.target.files[0])}
              />
            </>
          ) : (
            <>
              <img
                src={userData.profileImage || defaultImageURL}
                alt="userpic"
                className="bg-[#000] row-span-2 w-10 h-10 rounded-full"
              />
            </>
          )}
          <div className="flex flex-col">
            <span className="text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
              {isEditing ? (
                <>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="bg-[#ffffff70] p-1 mb-1 rounded-[0.25rem] w-[10.5rem]"
                    value={userData.username || editedUsername}
                    onChange={(e) => setEditedUsername(e.target.value)}
                  />
                </>
              ) : (
                userData.username
              )}
            </span>

            <span className="text-[#00000085] font-light text-[0.75rem] hover:underline flex gap-20 items-center">
              {isEditing ? (
                <>
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    className="bg-[#ffffff70] p-1 rounded-[0.25rem] w-[10.5rem]"
                    value={userData.country || editedCountry}
                    onChange={(e) => setEditedCountry(e.target.value)}
                  />
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    className="bg-[#ffffff70] p-1 rounded-[0.25rem] w-[10.5rem]"
                    value={userData.city }
                    onChange={(e) => setEditedCity(e.target.value)}
                  />
                </>
              ) : (
                <>
                  {userData.country}, {userData.city}
                </>
              )}
            </span>
          </div>
        </div>
        <div className="mt-8 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
          {isEditing ? (
            <>
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="bg-[#ffffff70] p-1 rounded-[0.25rem] "
                value={userData.email || editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
            </>
          ) : (
            userData.email
          )}
        </div>
        <hr
          className={` ${
            isEditing ? "hidden" : ""
          }  w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 `}
        />
        <div className=" mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
          {isEditing ? (
            <>
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                className="bg-[#ffffff70] p-1 rounded-[0.25rem] "
                value={userData.phonenumber || editedPhoneNumber}
                onChange={(e) => setEditedPhoneNumber(e.target.value)}
              />
            </>
          ) : (
            userData.phonenumber
          )}
        </div>
        <hr
          className={` ${
            isEditing ? "hidden" : ""
          }  w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 `}
        />

        {isEditing && (
          <>
            <label htmlFor="" className="text-[#000] font-light text-[0.9rem] ">
              Password
            </label>
            <div className=" mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
              {isEditing ? (
                <input
                  type="text"
                  className="bg-[#ffffff70] p-1 rounded-[0.25rem] "
                  value={editedPassword}
                  onChange={(e) => setEditedPassword(e.target.value)}
                />
              ) : (
                userData.password
              )}
            </div>
            <button
              className="text-center mt-4 text-[#fff] font-light text-[0.9rem]  bg-[#373737] rounded-[0.25rem] p-1 w-[10rem]"
              onClick={handleUpdateInfo}
            >
              Save Changes
            </button>
          </>
        )}
      <hr
        className={` ${
          isEditing ? "hidden" : ""
        }  w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 `}
      />

      <div
        className={` ${
          isEditing ? "hidden" : ""
        } mt-8 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center`}
        onClick={() => setIsEditing(true)}
      >
        Update my Info
      </div>
    </div>
  );
};
