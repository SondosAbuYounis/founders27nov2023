import React from 'react'

export const Comment = () => {
  return (
    <>
    <div className='flex flex-row gap-6 '>
        <img src="" alt="userpic" className='bg-[#000] row-span-2 w-10 h-10 rounded-full'/>
        <div className='flex flex-col'>
            <span className='text-[#000] font-light text-[0.9rem]'>Caroline</span>
            <span className='text-[#00000085] font-light text-[0.75rem]' >Amman</span> 
        </div>     
    </div>
    </>
  )
}
