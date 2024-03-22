import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar'

const SelectAddQuestion = () => {
  return (
    <div>
        <Navbar/>

        <div className='flex max-w-[1100px] justify-between mx-auto mt-[100px]  text-white'>
            <h2 className='flex flex-col font-medium text-3xl'>
                Questions
            </h2>

            <h3 className='font-light flex text-xl'>
                logged in as : Dissanayake D M A P
            </h3>
        </div>
        <div className='flex max-w-[1100px] justify-between mx-auto mt-[50px] bg-slate-800 py-2 px-2 text-white'>
            <Link>
            <h2 className='flex flex-col font-normal text-2xl'>Mathematics for Computing (MC) </h2>
            </Link>
        </div>

        <div className='max-w-[1000px] mx-auto grid md:grid-cols-2 gap-4 mt-[80px] text-white text-xl mb-0'>
            <Link to='/admin/academic_period/modules/question/select'>
                <button className='bg-[#191919] px-[150px]  hover:bg-slate-600 duration-500 h-[130px]'>Select Questions</button>
            </Link>

            <Link to=''>
                <button className='bg-[#191919] px-[150px]  hover:bg-slate-600 duration-500 h-[130px]'>Add Questions</button>
            </Link>     
        </div>
    </div>
  )
}

export default SelectAddQuestion