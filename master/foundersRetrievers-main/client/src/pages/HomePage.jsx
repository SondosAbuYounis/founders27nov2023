import React from 'react'
import { HomeHero } from '../components/HomeHero'
import { CardHomeFound } from '../components/uiPrimitives/CardHomeFound'
import { CardHomeLost } from '../components/uiPrimitives/CardHomeLost'
import { Link } from 'react-router-dom'
import HowItWorksStatic from '../assets/clips/HowItWorksStatic.png'
import { BeTheLink } from '../components/BeTheLink'
import { CaseStory } from '../components/CaseStory'
import { CardRetrievedHome } from '../components/CardRetrievedHome'
import {PublishLost } from '../components/PublishLost'
import { PublishFound } from '../components/PublishFound'
import { DeliveryAlertFound } from '../components/DeliveryAlertFound'
import TrySwiper from '../service/TrySwiper'
import { AutoplaySwiper } from '../components/swipers/MainSwiper'
import NewsTicker from '../components/swipers/TryNewsTicker'
import Payment from '../components/Payment'
import { MainCardFound } from '../components/MainCardFound'
import { ConfirmContact } from '../components/uiPrimitives/ConfirmContact'

export const HomePage = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div >
        <HomeHero />
        <hr className="my-6 border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className='p-4 grid auto-rows-auto	 justify-items-center gap-8	'>
            <div className='place-items-center text-2xl font-semibold'>Recently Lost and Found </div>
            <div className='p-4 flex flex-row gap-8'>
            <AutoplaySwiper />
            </div>
            <div className='text-[0.85rem]'><Link to='/signup' className='text-[#E83434] hover:text-[#E8343485] justify-self-center place-items-center font-light underline decoration-solid ' >Sign Up/ In now.</Link> Be the Link !</div>
        </div>

        <hr className="my-6 border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 lg:my-8" />
        
        <div className='p-8 grid auto-rows-auto	 justify-items-center gap-8	'>
          <div className='place-items-center text-2xl font-semibold'>How it works ? </div>
          <img src={HowItWorksStatic} alt="" className='p-12 w-[80rem]'/>
          <div className='text-[0.85rem]'>Learn <Link to='/aboutus' className='text-[#E83434] hover:text-[#E8343485] justify-self-center place-items-center font-light underline decoration-solid ' >more</Link></div>
        </div>
        
        <BeTheLink />

        <hr className="my-6 border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 lg:my-8" />
        
        <div className=''>
          <div className='place-items-center text-2xl font-semibold text-center pb-12 pt-12'>Recently Linked </div>
            <CardRetrievedHome />
          <div className='text-[0.85rem] text-center pb-12 pt-12'><Link to='/signup' className='text-[#E83434] hover:text-[#E8343485] justify-self-center place-items-center font-light underline decoration-solid ' >Sign Up/In  </Link>now. Be the Link !</div>
        </div>

        <div className='text-2xl font-semibold text-center pb-16'> Case Story</div>
        <CaseStory />

      <div className='ml-24'>
        <PublishLost />
        <br />
        <PublishFound />
        <br />
        <DeliveryAlertFound />
        {/* <Payment /> */}
        </div>
      
       <MainCardFound />
       <ConfirmContact />

    </div>
  )
}
