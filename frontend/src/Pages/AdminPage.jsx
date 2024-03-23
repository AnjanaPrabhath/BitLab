import React from 'react'
import ProfileNavbar from '../Components/ProfileNavbar'
import { Link } from 'react-router-dom'


const AdminPage = () => {
  return (
    <div>
        <ProfileNavbar/>

        <div className='flex max-w-[1100px] justify-between mx-auto mt-[100px]  text-white'>
          <h2 className='flex flex-col font-medium text-3xl'>
            Dashboard
          </h2>

          <h3 className='font-light flex text-xl'>
            logged in as : Dissanayake D M A P
          </h3>

        </div>

        <div className='max-w-[1100px] mx-auto grid md:grid-cols-3 gap-8 mt-[100px] text-white text-xl'>

        <Link to='/admin/student_details'>
          <button className='bg-[#191919] px-[100px] py-[40px] hover:scale-105 duration-500'>Student Details</button>
        </Link>

        <Link to='/admin/academic_period'>
          <button className='bg-[#191919] px-[100px] py-[40px] hover:scale-105 duration-500'>Academic Period</button>
        </Link> 
        
        <Link to='/admin/sandani/learning_portal'> {/* Link to the Learning Portal route */}
          <button className='bg-[#191919] px-[100px] py-[40px] hover:scale-105 duration-500'>Learning Portal</button>
        </Link> 

        <Link to='/admin/sandani/SignUp/edit_student_form'>
          <button className='bg-[#191919] px-[100px] py-[40px] hover:scale-105 duration-500'>Edit Personal details</button>
        </Link>

        <Link to='/admin/session_password'>
          <button className='bg-[#191919] px-[100px] py-[40px] hover:scale-105 duration-500'>Session Password</button>
        </Link>

        <Link to='/admin/academic_period'>
          <button className='bg-[#191919] px-[100px] py-[40px] hover:scale-105 duration-500'>hello</button>
        </Link>
          

        </div>
        
    </div>
  )
}

export default AdminPage