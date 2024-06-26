import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const ViewStudentRecord = () => {
  return (
    <div>
        <Navbar/>

        <div className='flex max-w-[1100px] justify-between mx-auto mt-[50px]  text-white'>
          <h2 className='flex flex-col font-medium text-3xl'>
              Personal Report
          </h2>

          <h3 className='font-light flex text-xl'>
              logged in as : Dissanayake D M A P
          </h3>
      </div>

      {/* Question and Answer */}

      <div className='max-w-[1000px] bg-gray-700 my-[50px] mx-auto'>
          
            <div className='px-10'>
              <p className='py-3 '>Question Topic </p>
              <div>
                  <input type="text"
                  className='bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 mt-1 mb-2 border-blue-400 w-full'
                  />
              </div>

              <p className='py-3 '>Question Description </p>
              <div>
                  <textarea
                  className='bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 mt-1 mb-2 border-blue-400 w-full h-[200px]'
                  />
              </div>
              {/* add question button */}
              <div className='justify-center mx-auto'>
                <Link to="/admin/academic_period/modules/question">
                  <button className= 'text-center ml-[150px] bg-[#191919] px-[150px] hover:bg-[#06C6D5]  duration-500 py-2 mt-[30px] mb-[30px] rounded-md'>Add Question</button>              
                </Link>
              </div>
          </div>
        </div>
 
    </div>
  )
}

export default ViewStudentRecord