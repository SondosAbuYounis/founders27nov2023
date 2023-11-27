import React from 'react'
import HowItWorksStatic from '../assets/clips/HowItWorksStatic.png'


export const AboutHowItWorks = () => {
  return (
    <>
    <div className='p-8 grid auto-rows-auto	 justify-items-center gap-8	'>
        <div className='place-items-center text-2xl font-semibold'>How it works ? </div>
        <img src={HowItWorksStatic} alt="" className='p-12 w-[80rem]'/>
    </div>
    </>
  )
}
