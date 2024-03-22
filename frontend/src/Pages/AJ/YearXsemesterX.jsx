import React from 'react'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'

const YearXsemesterX = () => {
  return (
    <div>
        <Navbar/>

        <div className='flex max-w-[1100px] justify-between mx-auto mt-[100px]  text-white'>
            <h2 className='flex flex-col font-medium text-3xl'>
                Module Details
            </h2>

            <h3 className='font-light flex text-xl'>
                logged in as : Dissanayake D M A P
            </h3>
        </div>
        <div className='flex max-w-[1100px] justify-between mx-auto mt-[50px] bg-slate-800 py-1 px-2 text-white'>
          
            <h2 className='flex flex-col font-normal text-2xl'>Year 01 - Semester 01 </h2>
            
        </div>

        <div className='flex max-w-[1100px] justify-between mx-auto mt-[50px] bg-slate-600 py-1 px-2 text-white cursor-pointer hover:bg-slate-500 duration-500'>
            <Link to='/admin/academic_period/modules/question'>
            <h2 className='flex flex-col font-normal text-xl'>Mathematics for Computing (MC) </h2>
            </Link>
        </div>
        <div className='flex max-w-[1100px] justify-between mx-auto mt-4 bg-slate-600 py-1 px-2 text-white cursor-pointer hover:bg-slate-500 duration-500'>
            <h2 className='flex flex-col font-normal text-xl'>English for Academic Purpose (EAP) </h2>
        </div>
        <div className='flex max-w-[1100px] justify-between mx-auto mt-4 bg-slate-600 py-1 px-2 text-white cursor-pointer hover:bg-slate-500 duration-500'>
            <h2 className='flex flex-col font-normal text-xl'>Information and Comunication Skills (ICS)</h2>
        </div>
        <div className='flex max-w-[1100px] justify-between mx-auto mt-4 bg-slate-600 py-1 px-2 text-white cursor-pointer hover:bg-slate-500 duration-500'>
            <h2 className='flex flex-col font-normal text-xl'>Introduction to Programming (IP)</h2>
        </div>
    </div>    

  )
}

export default YearXsemesterX