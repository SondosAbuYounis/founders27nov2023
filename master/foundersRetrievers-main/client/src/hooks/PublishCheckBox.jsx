// import React, { useState } from 'react';
// import axios from 'react-axios'
// import { Link } from 'react-router-dom'
// import { MinusRed, Plus, PlusYellow } from '../assets/icons/IconsSVGConst'
// import { LinkIcon } from '../assets/icons/IconsSVGConst'

// export const PublishLost = () => {


//     // Functionality
//     const [formData, setFormData] = useState({
//         blog_title: '',
//         blog_description:'',
//         the_user: '',
//         image: '',
//         place_name:'',
//         place_location:'',

//     });
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//           ...formData,
//           [name]: value,
//         });
//       };
//       const [error, setError] = useState('');
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         // End point 
//         axios.post('/api/login', formData)
//         .then((response) => {
//           window.location.href = '/card/:id';
//         })
//         .catch((error) => {
//           setError('Something went wrong');
//         });
//     };
//   return (
//     <>
//     <div className='p-12 bg-[#373737] rounded-[1rem] w-[50rem] h-[45rem] ' >
//         <form onSubmit={handleSubmit} className="flex flex-col align-start justify-start gap-4 ">
//             <label htmlFor="">
//                 <input type="checkbox" id='option1' checked={''} onChange={''} className='relative inline-block' />
//                 <span className="absolute w-32 flex flex-row inline-block gap-x-2 px-[0.75rem] pb-2 hover:text-[#FBE62E] bg-none border border-2 hover:border-[#FBE62E]  focus:outline-none text-[#FFFFFF] text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
//                    <PlusYellow /> I’VE FOUND
//                 </span>
//             </label>
//             <label htmlFor="">
//                 <input type="checkbox" id='option2' checked={''} onChange={''} />
//                 <label className="w-32 flex flex-row align-center inline-block gap-x-2 px-[1rem] pb-2 hover:text-[#E83434] bg-none border border-2 hover:border-[#E83434] text-[#FFFFFF] text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
//                    <MinusRed />
//                     I’VE LOST
//                 </label>
//             </label>

//             <br /> <br /> <br />
//             <label className='self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD]'>Please fill the following information regarding the belonging you found </label>
            
//             <label className='self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]'>Under what category does it fall !</label>
//             {/* map categories */}
//             <select name="" id="">
//                 <option value="">Animal</option>
//                 <option value="">Electronic</option>
//                 <option value="">Bags</option>
//                 <option value="">Clothing</option>
//                 <option value="">Accessories</option>
//                 <option value="">Jewellery</option>
//                 <option value="">Keys</option>
//                 <option value="">Mobile phone</option>
//                 <option value="">Toys</option>
//                 <option value="">Wallet</option>
//                 <option value="">Tools</option>
//                 <option value="">others</option>
//             </select>

//             <label className='self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]'>Where and when did you find it !</label>
//             <label htmlFor="" className='flex flex-row gap-4'>
//                 <select name="" id="" className='w-24'>
//                     <option value="">Country</option>
//                     <option value="">Jordan</option>
//                 </select>
//                 <select name="" id="" className='w-24'>
//                     <option value="">City</option>
//                     <option value="">Amman</option>
//                     <option value="">Zarqaa</option>
//                 </select>
//                 <input type="date"  className='w-32'/>
//             </label>

//             <label htmlFor="" className='self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]'>Attach images of the item</label>
//             <input type="file" />
            
//             {/* max number of letters */}
//             <label htmlFor="" className='self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]'>Write notes/ description to others</label>
//             <input type="text" className='h-[7rem]' />
            
//             <button type='submit' className=" self-end text-center w-28 px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737]  rounded-lg text-[1rem] px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Publish</button>
//         </form>
//     </div>
//     </>
//   )
// }
