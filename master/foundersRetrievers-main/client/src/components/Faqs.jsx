import React from 'react'
import Connection from '../assets/clips/Connection.png'

export const Faqs = () => {
  return (
    <>
    <div className='text-center text-2xl font-semibold pt-24 pb-24'>Frequently asked questions</div>

    <div className='flex flex-row justify-center gap-24'>
        <img src={Connection} alt="connection" className='w-[36rem] h-[24rem]' />
        <div className=' text-start place-self-center flex flex-col gap-1 w-[40rem] max-w-[35rem]'>
            <div className='text-[1.7rem] font-light'>In what countries is this website available ?</div>
            <div className='text-[#868686] pb-4'>In the recent time, this website is dedicated for The Hashemite Kingdom of Jordan, covering all of the kingdom’s cities </div>
            <div className='text-[1.7rem] font-light'>Where do lost pets stay ?</div>
            <div className='text-[#868686] pb-4'>Lost pets can be fostered by the founder themselves or some of the near pet shelters. long story short, they will be safe and sound until their owner pickes them up </div>

        </div>

    </div>

    </>
  )
}
