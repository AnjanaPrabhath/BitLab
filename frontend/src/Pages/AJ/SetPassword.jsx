import React from 'react'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'

const SetPassword = () => {
  return (
    <div>
      <Navbar/>

      <div className='flex max-w-[1100px] justify-between mx-auto mt-[50px]  text-white'>
          <h2 className='flex flex-col font-medium text-3xl'>
              Session Password
          </h2>

          <h3 className='font-light flex text-xl'>
              logged in as : Dissanayake D M A P
          </h3>
      </div>

      <div className='flex flex-col items-center justify-center mt-[50px]'>
        <div className='bg-gray-700 w-[600px] h-[350px]'>
          <div className='flex flex-col items-center text-center'>

            <h2 className='text-white text-xl py-8'>Enter your Admin Credentials</h2>
            <input type="password"
                placeholder='password'
                className='text-center mt-[30px] w-[400px] bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400 '
                />

            <Link to='/admin'>
            <button className='bg-[#06C6D5] hover:bg-[#2df1ff] duration-300 mt-[70px] px-8 py-2 ' >SUBMIT</button>
            </Link>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default SetPassword