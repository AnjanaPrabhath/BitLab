import React from 'react'
import { Link } from 'react-router-dom'
import LoginWithPassword from './LoginWithPassword'


const LoginForm = ({toggleTurn}) => {

  return (
    <div className='text-white'>
        <h1 className='text-3xl font-medium text-center'>Welcome to BitLab</h1>
        <p className='py-3'>please enter your username and wait for your password </p>
        <div>
            <div>
                <input type="text"
                placeholder='username'
                className='bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400 w-full'
                />
            </div>
            <div>

              <Link to={LoginWithPassword}>
                <button className='bg-blue-400 my-5 px-4 py-1 w-full' onClick={toggleTurn}>NEXT</button>              
              </Link>
              <p className='text-center'>if you dont have account</p>
              <Link to="/admin/sandani/SignUp/sign_up_page">
                <button className='border-blue-400 border my-5 px-4 py-1 w-full hover:text-blue-400 hover:scale-105 duration-500'>Register Now</button>              
              </Link>
            </div>
        </div>
    </div>
  )
}

export default LoginForm