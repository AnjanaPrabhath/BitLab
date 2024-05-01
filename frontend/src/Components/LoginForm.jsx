import React from 'react'
import { Link } from 'react-router-dom'
import LoginWithPassword from './LoginWithPassword'
import SignUpPage from '../Pages/bhagya/SignUp/SignUpPage'



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

            <p className='text-center'>if you dont have account, 
            <Link to='/registration'>
            <span className='text-center underline'>register now</span >
            </Link>
            </p>
            

              <Link to={LoginWithPassword}>
                <button className='bg-[#06C6D5] my-5 px-4 py-1 w-full' onClick={toggleTurn}>NEXT</button>              
              </Link>
              <Link to="/admin/sandani/SignUp/sign_up_page">
                <button className='bg-[#06C6D5] my-5 px-4 py-1 w-full'>SIGN UP</button>              
              </Link>
            </div>
        </div>
    </div>
  )
}

export default LoginForm