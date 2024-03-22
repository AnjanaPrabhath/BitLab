import React from 'react'
import ProfileNavbar from '../Components/ProfileNavbar'
import { Link } from 'react-router-dom'

const AcademicPeriod = () => {
  return (
    <div>
    <ProfileNavbar/>

    <div className='flex max-w-[1100px] justify-between mx-auto mt-[100px]  text-white'>
      <h2 className='flex flex-col font-medium text-3xl'>
        Academic Period
      </h2>

      <h3 className='font-light flex text-xl'>
        logged in as : Dissanayake D M A P
      </h3>

    </div>



{/* academic period year 01*/}

    <div className='max-w-[1000px] mx-auto grid md:grid-cols-2 gap-4 mt-[80px] text-white text-xl mb-0'>
      <Link to='/admin/academic_period/modules'>
        <button className='bg-[#191919] px-[150px]  hover:bg-slate-600 duration-500 h-[60px]'>Year 01 - Semester 01</button>
      </Link>

      <Link to='/'>
        <button className='bg-[#191919] px-[150px]  hover:bg-slate-600 duration-500 h-[60px]'>Year 01 - Semester 02</button>
      </Link>     
    </div>



{/* academic period year 02*/}

<div className='max-w-[1000px] mx-auto grid md:grid-cols-2 gap-4 mt-[30px] text-white text-xl mb-0'>
      <Link to='/'>
        <button className='bg-[#191919] px-[150px]  hover:bg-slate-600 duration-500 h-[60px]'>Year 02 - Semester 01</button>
      </Link>

      <Link to='/'>
        <button className='bg-[#191919] px-[150px]  hover:bg-slate-600 duration-500 h-[60px]'>Year 02 - Semester 02</button>
      </Link>     
    </div>



{/* academic period year 03*/}

<div className='max-w-[1000px] mx-auto grid md:grid-cols-2 gap-4 mt-[30px] text-white text-xl mb-0'>
      <Link to='/'>
        <button className='bg-[#191919] px-[150px]  hover:bg-slate-600 duration-500 h-[60px]'>Year 03 - Semester 01</button>
      </Link>

      <Link to='/'>
        <button className='bg-[#191919] px-[150px]  hover:bg-slate-600 duration-500 h-[60px]'>Year 03 - Semester 02</button>
      </Link>     
    </div>



{/* academic period year 04*/}

<div className='max-w-[1000px] mx-auto grid md:grid-cols-2 gap-4 mt-[30px] text-white text-xl mb-0'>
      <Link to='/'>
        <button className='bg-[#191919] px-[150px]  hover:bg-slate-600 duration-500 h-[60px]'>Year 04 - Semester 01</button>
      </Link>

      <Link to='/'>
        <button className='bg-[#191919] px-[150px]  hover:bg-slate-600 duration-500 h-[60px]'>Year 04 - Semester 02</button>
      </Link>     
    </div>


</div>
  )
}

export default AcademicPeriod