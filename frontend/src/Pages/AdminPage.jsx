import React from 'react'
import ProfileNavbar from '../Components/ProfileNavbar'


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

          
          
        <button className='bg-[#191919] px-[100px] py-[40px] hover:scale-105 duration-500'>Academic Period</button>
        <button className='bg-[#191919] px-[100px] py-[40px] hover:scale-105 duration-500'>Student Details</button>
        <button className='bg-[#191919] px-[100px] py-[40px] hover:scale-105 duration-500'>Learning Portal</button>
        <button className='bg-[#191919] px-[100px] py-[40px] hover:scale-105 duration-500'>Edit Personal details</button>
        <button className='bg-[#191919] px-[100px] py-[40px] hover:scale-105 duration-500'>Session Password</button>
        <button className='bg-[#191919] px-[100px] py-[40px] hover:scale-105 duration-500'>hello</button>
          

        </div>
        
    </div>
  )
}

export default AdminPage