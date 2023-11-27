import React from 'react'
import { AboutHero } from '../components/AboutHero'
import { Link } from 'react-router-dom'
import { BeTheLink } from '../components/BeTheLink'
import { StaticCardHomeLost } from '../components/uiPrimitives/StaticCardHomeLost'
import { Comment } from '../components/uiPrimitives/Comment'
import { AboutHowItWorks } from '../components/AboutHowItWorks'
import { AboutSteps } from '../components/AboutSteps'
import { Faqs } from '../components/Faqs'
import { CaseStory } from '../components/CaseStory'

export const AboutUs = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <>
    <AboutHero />
    <hr className="my-6 border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 lg:my-8" />
    <AboutHowItWorks />
        
    <AboutSteps />

    <Faqs />

    <div className='text-2xl font-semibold text-center pb-16 pt-24'> Case Story</div>
    <CaseStory />


    </>
  )
}
