import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const StudentDetails = () => {
  return (
    <div>
      <Navbar/>

        <div className='flex max-w-[1100px] justify-between mx-auto mt-[50px]  text-white'>
            <h2 className='flex flex-col font-medium text-3xl'>
                Connected Students
            </h2>

            <h3 className='font-light flex text-xl'>
                logged in as : Dissanayake D M A P
            </h3>
        </div>

        <div className='max-w-[1100px] justify-between mx-auto mt-[50px]py-2 px-2 text-white grid grid-cols-4 gap-4 '>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='max-w-[1100px] justify-between mx-auto mt-[5px] bg-slate-800 py-2 px-2 text-white grid grid-cols-5 gap-4 '>
                <Link>
                <h2 className='flex flex-col font-normal text-xl'>Question 07 </h2>
                </Link>

                <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[10px] py-1'>view</button>
                <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[10px] py-1'>edit</button>
                <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[10px] py-1'>delete</button>
                <button className='bg-slate-600 cursor-pointer  hover:bg-[#06C6D5] hover:text-black duration-500 px-[10px] py-1'>Add to Labsheet</button>
        </div>
    </div>
  )
}

export default StudentDetails