import React from 'react'
import { useState } from 'react';
import { PostComment } from '../../assets/icons/IconsSVGConst';

export const CoomentFunctional = ({description, username, image}) => {
  return (
    <>
    <div>
        <div className='flex flex-row gap-4  bg-[#86868650] p-4 rounded-[0.5rem] hover:scale-105'>
            <img src={image} alt="userpic" className='bg-[#000] row-span-2 w-8 h-8 rounded-full'/>
            <div className='flex flex-col'>
                <span className='text-[#000] font-light text-[0.9rem]'>{username}</span>
                <span className='text-[#00000095] font-light text-[0.75rem]  max-h-4 h-8 hover:h-12 max-w-8 w-48 overflow-hidden hover:overflow-visible ' >{description}</span> 
            </div>     
        </div>
    </div>
    </>
  )
}



const CommentInput = ({ onPostComment, image }) => {
  const [comment, setComment] = useState('');

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handlePostComment = () => {
    if (comment.trim() !== '') {
      // Call the onPostComment function passed as a prop
      onPostComment(comment);
      // Clear the input field after posting the comment
      setComment('');
    }
  };

  return (
    <div className='flex flex-row gap-4 bg-[#86868650] p-4 rounded-[0.5rem] hover:scale-105 mt-2 mb-2'>
      {/* You can customize the user image based on your requirements */}
      <img src={image} alt="userpic" className='bg-[#000] row-span-2 w-8 h-8 rounded-full'/>
      <div className='flex flex-row'>
        {/* Input field for entering the comment */}
        <input
          type="text"
          value={comment}
          onChange={handleInputChange}
          placeholder="Enter your comment..."
          className='text-[#00000095] font-light text-[0.75rem] max-h-4 h-8 max-w-8 w-44 overflow-hidden hover:overflow-visible'
        />
        {/* Button to post the comment */}
        <button
          onClick={handlePostComment}
          className='text-[#00000095] font-light text-[0.75rem] hover:h-12'
        >
          <PostComment />
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
