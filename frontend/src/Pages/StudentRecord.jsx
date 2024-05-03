import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const StudentRecord = () => {
  return (
    <div>
    <Navbar/>

      <div className='flex max-w-[1100px] justify-between mx-auto mt-[50px]  text-white'>
          <h2 className='flex flex-col font-medium text-3xl'>
              Student 01
          </h2>

          <h3 className='font-light flex text-xl'>
              logged in as : Dissanayake D M A P
          </h3>
      </div>


      {/* student 01 */}
      <div className='max-w-[1100px] justify-between mx-auto bg-slate-800 py-2 px-2 text-white grid grid-cols-4 gap-4 mt-[100px] '>
              <Link>
              <h2 className='flex flex-col font-normal text-xl'>Student 01 - Day 01 </h2>
              </Link>

              <div></div>
              <Link to='/admin/student_details/view_student_record'>
              <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[40px] py-1'>View</button>
              </Link>
              <Link>
              <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[40px] py-1'>Get Report</button>
              </Link>
      </div>

      {/* student 02 */}
      <div className='max-w-[1100px] justify-between mx-auto mt-[5px] bg-slate-800 py-2 px-2 text-white grid grid-cols-4 gap-4 '>
              <Link>
              <h2 className='flex flex-col font-normal text-xl'>Student 01 - Day 02 </h2>
              </Link>

              <div></div>
              <Link to='/admin/student_details/view_student_record'>
              <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[40px] py-1'>View</button>
              </Link>
              <Link>
              <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[40px] py-1'>Get Report</button>
              </Link>
      </div>

      {/* student 03 */}
      <div className='max-w-[1100px] justify-between mx-auto mt-[5px] bg-slate-800 py-2 px-2 text-white grid grid-cols-4 gap-4 '>
              <Link>
              <h2 className='flex flex-col font-normal text-xl'>Student 02 - Day 01 </h2>
              </Link>

              <div></div>
              <Link to='/admin/student_details/view_student_record'>
              <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[40px] py-1'>View</button>
              </Link>
              <Link>
              <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[40px] py-1'>Get Report</button>
              </Link>
      </div>

      {/* student 04 */}
      <div className='max-w-[1100px] justify-between mx-auto mt-[5px] bg-slate-800 py-2 px-2 text-white grid grid-cols-4 gap-4 '>
              <Link>
              <h2 className='flex flex-col font-normal text-xl'>Student 02 - Day 02 </h2>
              </Link>

              <div></div>
              <Link to='/admin/student_details/view_student_record'>
              <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[40px] py-1'>View</button>
              </Link>
              <Link>
              <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[40px] py-1'>Get Report</button>
              </Link>
      </div>

      {/* student 05 */}
      <div className='max-w-[1100px] justify-between mx-auto mt-[5px] bg-slate-800 py-2 px-2 text-white grid grid-cols-4 gap-4 '>
              <Link>
              <h2 className='flex flex-col font-normal text-xl'>Student 03 - Day 01 </h2>
              </Link>

              <div></div>
              <Link to='/admin/student_details/view_student_record'>
              <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[40px] py-1'>View</button>
              </Link>
              <Link>
              <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[40px] py-1'>Get Report</button>
              </Link>
      </div>

      {/* student 06 */}
      <div className='max-w-[1100px] justify-between mx-auto mt-[5px] bg-slate-800 py-2 px-2 text-white grid grid-cols-4 gap-4 '>
              <Link>
              <h2 className='flex flex-col font-normal text-xl'>Student 03 - Day 02 </h2>
              </Link>

              <div></div>
              <Link to='/admin/student_details/view_student_record'>
              <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[40px] py-1'>View</button>
              </Link>
              <Link>
              <button className='bg-slate-600 cursor-pointer hover:scale-105 duration-500 px-[40px] py-1'>Get Report</button>
              </Link>
      </div>
  </div>
  )
}

export default StudentRecord