import React from 'react'
import WorldMap from '../assets/clips/WorldMap.png'
import heroNow from '../assets/clips/heroNow.png'
import { Link } from 'react-router-dom'

export const AboutHero = () => {
  return (
    <>
    <div id="hero-section" className='flex flex-row justify-around mt-20 mx-20	'>
      <div className='flex flex-col justify-center text-center'>
        <p className='font-bold	text-4xl mb-5'>Founders Retrievers </p>
        <p className='max-w-[35rem]' >Founders Retrievers is your all in one place lost and found items. Together we can link all lost items to their rightful owner ! </p>
      </div>
      <img src={heroNow} className='px-3 pb-2 mt-6 h-[30rem] justify-self-start '/>
    </div>

    </>
    )
}
