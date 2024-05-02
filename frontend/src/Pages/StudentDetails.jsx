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

        <div className='max-w-[1100px] justify-between mx-auto mt-[50px]py-2 px-[10px] py-1 mt-[50px] mb-[20px] text-white grid grid-cols-4 gap-4 '>
          <div></div>
          <div></div>
          <div className='text-center'>Availability</div>
          <div className='text-center'>Records</div>
        </div>

        {/* student 01 */}
        <div className='max-w-[1100px] justify-between mx-auto mt-[5px] bg-slate-800 py-2 px-2 text-white grid grid-cols-4 gap-4 '>
                <Link>
                <h2 className='flex flex-col font-normal text-xl'>Student 01 </h2>
                </Link>

                <div></div>
                <div className='text-center'>Available</div>
                <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[10px] py-1'>view record</button>
                
        </div>

        {/* student 02 */}
        <div className='max-w-[1100px] justify-between mx-auto mt-[5px] bg-slate-800 py-2 px-2 text-white grid grid-cols-4 gap-4 '>
                <Link>
                <h2 className='flex flex-col font-normal text-xl'>Student 02 </h2>
                </Link>

                <div></div>
                <div className='text-center'>Not Available</div>
                <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[10px] py-1'>view record</button>
                
        </div>

        {/* student 03 */}
        <div className='max-w-[1100px] justify-between mx-auto mt-[5px] bg-slate-800 py-2 px-2 text-white grid grid-cols-4 gap-4 '>
                <Link>
                <h2 className='flex flex-col font-normal text-xl'>Student 03 </h2>
                </Link>

                <div></div>
                <div className='text-center'>Available</div>
                <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[10px] py-1'>view record</button>
                
        </div>

        {/* student 04 */}
        <div className='max-w-[1100px] justify-between mx-auto mt-[5px] bg-slate-800 py-2 px-2 text-white grid grid-cols-4 gap-4 '>
                <Link>
                <h2 className='flex flex-col font-normal text-xl'>Student 04 </h2>
                </Link>

                <div></div>
                <div className='text-center'>Available</div>
                <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[10px] py-1'>view record</button>
                
        </div>

        {/* student 05 */}
        <div className='max-w-[1100px] justify-between mx-auto mt-[5px] bg-slate-800 py-2 px-2 text-white grid grid-cols-4 gap-4 '>
                <Link>
                <h2 className='flex flex-col font-normal text-xl'>Student 05 </h2>
                </Link>

                <div></div>
                <div className='text-center'>Available</div>
                <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[10px] py-1'>view record</button>
                
        </div>
    </div>
  )
}

export default StudentDetails