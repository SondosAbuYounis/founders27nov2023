import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Await } from "react-router-dom";
import { Navigate, useNavigate  } from "react-router-dom";


const SingUpForm = () => {
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
    display: "flex",
    flexDirection: "column",
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
    email: "",
    // phonenumber: "",
    country: "",
    city: "",
    password: "",
    password2: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [error, setError] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Password validation
    const validatePassword = (password) => {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/;
      return passwordRegex.test(password);
    };
    // Email Validation
    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };
    const isValid = validateEmail(formData.email);
    setIsEmailValid(isValid);
    // UserName Validation
    const validateUserName = (username) => {
      const nameRegex = /^[a-zA-Z0-9]{3,6}$/;
      return nameRegex.test(username);
    };
    const nameIsValid = validateUserName(formData.username);
    setIsNameValid(nameIsValid);

    const isPasswordValid = validatePassword(formData.password);
    if (!isPasswordValid) {
      setIsPasswordValid(false);

      // UserName Validation
      const validateUserName = (username) => {
        const nameRegex = /^[a-zA-Z0-9]{3,6}$/;
        return nameRegex.test(username);
      };
      const nameIsValid = validateUserName(formData.username);
      setIsNameValid(nameIsValid);

      // Password validation
      const validatePassword = (password) => {
        const passwordRegex =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/;
        return passwordRegex.test(password);
      };
      const validPassword = validatePassword(formData.password);
      setIsPasswordValid(validPassword);

      // Phonenumber validation
      const validatePhoneNumber = (phonenumber) => {
        const phoneNumberRegex = /^(?:(?:\+|00)962|0)?7[789]\d{8}$/;
        return phoneNumberRegex.test(phonenumber);
      };
      const validPhoneNumber = validatePhoneNumber(formData.phonenumber);
      setIsPhoneNumberValid(validPhoneNumber);
    }

    // Send the form data to the server for authentication
    axios
      .post("http://localhost:3000/register", formData)
      .then((response) => {
        navigate("/");

        // add navigation and successfully signed in
      })
      .catch((error) => {
        // setError("Invalid credentials. Please try again.");
        setError("Please try again.");
        console.log('here', error)
      });
  };

  return (
    <div style={FormDivStyle}>
      <div className="p-8 grid grid-col-3 justify-items-stretch  bg-[#373737] rounded-[2rem] w-[45rem] ">
        <div className="col-span-3 justify-self-center text-[2.25rem] font-extralight pb-16 pt-4 text-[#fff]">
          SIGN UP
        </div>
        <form onSubmit={handleSubmit} style={FormStyle}>
          <div className="col-span-1 place-items-center flex-center">
            <label></label>
            <input
              type="text"
              name="username"
              style={inputBorderStyle}
              value={formData.username}
              onChange={handleChange}
              placeholder="Full Name"
              className="placeholder-[#CDCDCD84] mb-4 font-light"
            />
          </div>
          {!isNameValid && (
            <p style={erroMessage}>
              Username should be 3-6 characters without any special characters
            </p>
          )}

          <label></label>
          <input
            type="email"
            name="email"
            style={inputBorderStyle}
            placeholder="Email"
            className="placeholder-[#CDCDCD84] mb-4 font-light"
            value={formData.email}
            onChange={handleChange}
          />
          {!isEmailValid && (
            <span style={erroMessage}>please enter a valid email address </span>
          )}
          {/* <label></label>
          <input
            type="integer"
            name="phonenumber"
            style={inputBorderStyle}
            placeholder="Phone Number"
            className="placeholder-[#CDCDCD84] mb-4 font-light"
            value={formData.phonenumber}
            onChange={handleChange}
          />
          {!isPhoneNumberValid && (
            <span style={erroMessage}>
              please enter a valid phonenumber i.e. +962 7 0000 0000{" "}
            </span>
          )} */}
          <label className="justify-self-start -ml-20	font-light mb-1 text-[#CDCDCD84]">
            Where do you live!
          </label>
          <label htmlFor="" className="flex flex-row gap-4 ">
            <select
              name="country"
              id=""
              className="w-24 mb-4  bg-transparent text-[#CDCDCD95]  "
              required
              onChange={handleChange}
            >
              <option value="">Country</option>
              <option value="Jordan">Jordan</option>
            </select>

            <select
              name="city"
              id=""
              className="w-24 mb-4 bg-transparent text-[#CDCDCD95]"
              required
              onChange={handleChange}
            >
              <option value="">City</option>
              <option value="Amman">Amman</option>
              <option value="Zarqaa">Zarqaa</option>
            </select>
          </label>

          <label></label>
          <input
            type="password"
            name="password"
            style={inputBorderStyle}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="placeholder-[#CDCDCD84] mb-4 font-light"
          />
          {!isPasswordValid && (
            <p style={erroMessage}>
              Password should be 8-20 characters with at least 1 letter, 1
              number and 1 special character
            </p>
          )}

          <label></label>
          <input
            type="password"
            name="password2"
            style={inputBorderStyle}
            placeholder="Confirm Password"
            value={formData.password2}
            onChange={handleChange}
            className="placeholder-[#CDCDCD84] mb-4 font-light"
          />
          {formData.password !== formData.password2 && (
            <p style={erroMessage}>Passwords don't match</p>
          )}
          <button
            type="submit"
            className=" px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737] text-xs  rounded-lg text-xs px-5 py-2 mt-8 mb-8 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            SIGN UP
          </button>
          {error && <div style={invalidCredintials}>{error}</div>}
        </form>

        <div className="col-span-1 flex flex-col items-center ">
          <div className="border-r border-[#ffffff85] h-40 mr-1"></div>
          <span className="text-white font-thin">or</span>
          <div className="border-r border-[#ffffff85] h-40 mr-1"></div>
        </div>

        <div className="col-span-1 place-items-center pt-[9.5rem] pl-4">
          {/* <div className='align-self-end mt-15'> */}
          <button
            type="submit"
            className="place-content-center h-10 flex flex-row gap-8  text-[#fff] bg-transparent border border-[0.005rem] border-[#ffffff95] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737] text-xs  rounded-lg text-xs px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5358 2.23238C13.3461 2.57303 14.8727 3.44476 15.5851 4.23515C15.735 4.40143 15.7267 4.65642 15.5663 4.81261L13.362 6.9595C13.2266 7.09144 13.0192 7.1156 12.857 7.01836C11.1582 5.99975 9.74143 5.95679 8.67104 6.31718C7.58411 6.68314 6.8081 7.48029 6.43511 8.2122C5.67097 9.71164 5.76085 12.1686 7.88042 13.502C9.20843 14.3375 10.5824 14.3344 11.6971 13.8902C12.8281 13.4394 13.6629 12.5481 13.924 11.6468C13.988 11.4258 14.2191 11.2985 14.4401 11.3625C14.6612 11.4265 14.7885 11.6576 14.7244 11.8787C14.3795 13.0694 13.3311 14.136 12.0056 14.6643C10.6639 15.199 9.00795 15.1959 7.43667 14.2074C4.86034 12.5866 4.78623 9.61241 5.69263 7.83382C6.1549 6.92671 7.09232 5.96942 8.40514 5.52741C9.66834 5.1021 11.2385 5.16721 13.0062 6.1428L14.6771 4.51547C14.0099 3.94807 12.816 3.32124 11.3817 3.05134C9.72491 2.73959 7.7989 2.91389 6.05059 4.1608C3.94383 5.66337 3.08706 7.55133 2.94008 9.35754C2.79176 11.1802 3.36603 12.9379 4.15515 14.1402C5.10772 15.5914 7.85888 17.9953 12.5445 16.724C14.2263 16.2677 15.4012 15.1019 16.1381 13.6465C16.8155 12.3085 17.1124 10.742 17.0811 9.31689H10.5643V11.4846H12.6536C12.8837 11.4846 13.0703 11.6711 13.0703 11.9012C13.0703 12.1314 12.8837 12.3179 12.6536 12.3179H10.1476C9.91749 12.3179 9.73094 12.1314 9.73094 11.9012V8.90022C9.73094 8.67011 9.91749 8.48356 10.1476 8.48356H17.4799C17.6995 8.48356 17.8814 8.65394 17.8957 8.87304C18.0039 10.5273 17.6968 12.4127 16.8816 14.023C16.0634 15.639 14.7212 16.9968 12.7627 17.5282C7.65426 18.9143 4.56264 16.2796 3.45848 14.5974C2.57893 13.2574 1.94452 11.3173 2.10949 9.28996C2.27581 7.24609 3.25429 5.13159 5.5667 3.48235C7.53879 2.07583 9.70817 1.88848 11.5358 2.23238Z"
                className="fill-[#D9D9D9] hover:fill-[#373737]"
              />
            </svg>
            <span className="py-0.5 text-[0.85rem] text-[#CDCDCD] hover:text-[#373737]">
              Continue with Google
            </span>
          </button>
          {/* </div> */}
        </div>
        <div className="col-span-3 flex items-center">
          <input
            type="checkbox"
            id="termsCheckbox"
            required
            style={{
              marginRight: "8px",
              borderRadius: "50%",
              backgroundColor: "transparent",
              border: "2px solid #CDCDCD",
              width: "16px",
              height: "16px",
            }}
          />
          <label
            htmlFor="termsCheckbox"
            className="text-[0.75rem] mb-1 mt-8 text-[#CDCDCD]"
          >
            By signing up, you agree to our Terms of Use and acknowledge you’ve
            read our Privacy Policy.
          </label>
        </div>

        <div className="col-span-3 text-[0.75rem] mb-1 mt-8 justify-self-center place-items-center text-[#CDCDCD]">
          Already have an account ?{" "}
          <Link
            to="/signin"
            className="hover:text-[#ffffff95]  underline decoration-solid"
          >
            Sing In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingUpForm;
