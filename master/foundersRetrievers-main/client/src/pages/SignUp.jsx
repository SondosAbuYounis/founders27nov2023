import React from 'react'
import SingUpForm from '../components/SignUpForm'
import BgBlur from '../assets/clips/BgBlur.png'

export const SignUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
      // Background style 
      const BgBLUR = {
        backgroundImage: `url(${BgBlur})`,
        backgroundSize: '85% 75%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display : 'flex',
        justifyContent: 'center',  
        padding : '7rem'
      }
    
  return (
    <>
    <div style={BgBLUR}>
    <SingUpForm />
    </div>
    </>
  )
}
