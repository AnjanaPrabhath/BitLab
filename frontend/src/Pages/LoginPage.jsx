import React from 'react'
import LoginForm from '../Components/LoginForm'
import Logo from '../Assets/Logo.png'

const LoginPage = () => {
  return (
    <div className='flex w-full h-screen'>

      {/* left screen */}
      <div className='w-full flex items-center justify-center lg:w-1/2 bgb bg-black'>
        
        <LoginForm/>

      </div>
      
      {/* right screen */}
      <div className='hidden  lg:flex h-full w-1/2 items-center justify-center bg-black'>
        {/* <div className='w-60 h-60 bg-gradient-to-tr from-violet-700 to-blue-600 rounded-full' /> */}

        <img src={Logo} className='w-[500px] animate-pulse'
        alt="" />
        

      </div>
    </div>
  )
}

export default LoginPage