import React from 'react'
import Poster from '../Assets/MainPoster.png'
import LogoIcon from '../Assets/logoImageWithoutText.png'
import { Link } from 'react-router-dom'


const Hero = () => {
    return (
      <div className='text-white bg-black'>

        {/* Hero image and the text */}

        <div className='items-center w-[1300px]'>

          <div className='max-w-[1300px] w-full mx-auto items-center '>
            
            <div className='absolute w-[1300px] h-[530px] bg-black opacity-40'></div>
        
            {/* heading */}
            <img className='mt-[70px] w-[100%] object-cover ml-[70px]' src={Poster} alt="" />

              {/* meka hadala iwara na */}
              <div className='absolute w-full top-[20%] mx-auto '>

                <div className='uppercase text-center mt-[50px]'>
                  <p className='my-4 md:my-10 text-xl md:text-4xl md:mt-6'>connect with the best classroom</p>

                  <img src={LogoIcon} 
                  className='w-[50px] md:w-[100px] mx-auto'
                  alt="" />

                  <p className='my-4 mb-8 text-5xl md:text-8xl'>b i t l a b</p>
                </div>

                <div className='flex my-4 justify-center'>
                  <Link to='/login' className='my-auto'>
                    <button className='mt-8 bg-[#06C6D5] w-[150px] text-black font-semibold hover:bg-[#2df1ff] duration-300 py-2 px-4 flex justify-center'>
                      LOGIN</button>
                  </Link>
                </div>                  

              </div>
          </div> 

        </div>

        {/* Instructions */}

        <div className='w-full py-[100px] bg-black'>
          <h2 className='text-2xl text-center pb-8 py-2 font-semibold mb-8'>Follow these Instructions</h2>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4' >
              <div className='w-[90%] mx-auto bg-[#090909] shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-500 '>
                  
                  <h2 className='text-xl font-extralight text-center py-8 text-[#06C6D5]'>STEP 01</h2>
                  <p className='text-center text-3xl font-bold'>LOGIN</p>
                  <div className=' font-light mb-4'>
                    <p className='border-b mx-8 py-2 mt-8 border-t'>enter your username</p>
                    <p className='border-b mx-8 py-2'>wait for the password</p>
                    <p className='border-b mx-8 py-2'>log in to the system</p>
                  </div>
                  
              </div>
              <div className='w-[90%] mx-auto bg-[#090909] shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-500  '>
                  
                  <h2 className='text-xl font-extralight text-center py-8 text-[#06C6D5]'>STEP 02</h2>
                  <p className='text-center text-3xl font-bold'>ASSESSMENT</p>
                  <div className=' font-light mb-4'>
                    <p className='border-b mx-8 py-2 mt-8 border-t'>switch between compilor & labshet</p>
                    <p className='border-b mx-8 py-2'>select relevant language </p>
                    <p className='border-b mx-8 py-2'>code the answer and check ontime</p>
                    <p className='border-b mx-8 py-2'>copy your code to the labsheet</p>
                    <p className='border-b mx-8 py-2'>submit your answer</p>
                  </div>
                  
              </div>
              <div className='w-[90%] mx-auto bg-[#090909] shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-500  '>
                  
                  <h2 className='text-xl font-extralight text-center py-8 text-[#06C6D5]'>STEP 03</h2>
                  <p className='text-center text-3xl font-bold'>FINALIZE</p>
                  <div className=' font-light mb-4'>
                    <p className='border-b mx-8 py-2 mt-8 border-t'>make sure copy & your code</p>
                    <p className='border-b mx-8 py-2'>submit your answers</p>
                    <p className='border-b mx-8 py-2'>log out from the system</p>
                  </div>
                  
              </div>
          </div>
        </div>
  
      </div>
    )
  }

export default Hero