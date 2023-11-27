import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    option1: false,
    option2: false,
    // Add other form fields here
  });

  const handleCheckboxChange = (option) => {
    // Set the selected option to true and the other option to false
    setFormData({
      ...formData,
      option1: option === 'option1' ? true : false,
      option2: option === 'option2' ? true : false,
      // Update other fields based on the selected option if needed
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <input
          type="checkbox"
          id="option1"
          checked={formData.option1}
          onChange={() => handleCheckboxChange('option1')}
          className="mr-2"
        />
        <label htmlFor="option1" className="text-gray-700">
          Option 1
        </label>
      </div>

      <div className="mb-4">
        <input
          type="checkbox"
          id="option2"
          checked={formData.option2}
          onChange={() => handleCheckboxChange('option2')}
          className="mr-2"
        />
        <label htmlFor="option2" className="text-gray-700">
          Option 2
        </label>
      </div>

      {/* Other form fields */}
      {/* For example: */}
      {/* <input
        type="text"
        id="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="mb-4 p-2"
        placeholder="Name"
      /> */}

      {/* Add more form fields as needed */}
      {/* ...

      {/* Submit button */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default MyForm;



// In this example:

// There are two checkboxes, and the handleCheckboxChange function is updated to take an argument representing the selected option.
// When a checkbox is checked, it sets the corresponding option to true and the other option to false.
// The form data (formData) reflects the user's choice, and you can access it when the form is submitted.
// Feel free to adjust the logic based on your specific requirements and the additional form fields you have in your form.


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <style>
//     /* Style for the container */
//     .checkbox-container {
//       position: relative;
//       display: inline-block;
//     }

//     /* Style for the hidden checkbox input */
//     .checkbox-input {
//       position: absolute;
//       opacity: 0;
//       cursor: pointer;
//     }

//     /* Style for the custom checkbox button */
//     .checkbox-button {
//       position: relative;
//       display: inline-block;
//       width: 20px;
//       height: 20px;
//       background-color: #ddd;
//       border-radius: 4px;
//       border: 1px solid #ccc;
//     }

//     /* Style for the checkmark icon */
//     .checkmark {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       width: 10px;
//       height: 10px;
//       border-radius: 50%;
//       background-color: #4CAF50;
//       display: none; /* Initially hidden */
//     }

//     /* Style for the label text */
//     .label-text {
//       margin-left: 10px;
//     }

//     /* Style for showing the checkmark when the checkbox is checked */
//     .checkbox-input:checked + .checkbox-button .checkmark {
//       display: block;
//     }
//   </style>
// </head>
// <body>

//   <!-- Checkbox container with hidden checkbox input, custom button, and label text -->
//   <label class="checkbox-container">
//     <input type="checkbox" class="checkbox-input">
//     <div class="checkbox-button">
//       <div class="checkmark"></div>
//     </div>
//     <span class="label-text">Check me</span>
//   </label>

// </body>
// </html>
