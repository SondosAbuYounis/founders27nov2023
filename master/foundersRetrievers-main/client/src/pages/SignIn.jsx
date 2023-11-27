import React from 'react'
import SingIn from '../components/SignInForm'
import BgBlur from '../assets/clips/BgBlur.png'


export const SignIn = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
   // Background style 
   const BgBLUR = {
    backgroundImage: `url(${BgBlur})`,
    backgroundSize: '75% 85%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    display : 'flex',
    justifyContent: 'center',  
    padding : '7rem'
  }
  return (
  
    <div style={BgBLUR}>
    <SingIn />
    </div>
  
  )
}
