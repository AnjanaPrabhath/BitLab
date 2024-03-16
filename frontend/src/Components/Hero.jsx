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
            <img className='mt-[70px] w-[100%] object-cover ' src={Poster} alt="" />

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
          <h2 className='text-2xl text-center pb-8  font-semibold'>Follow these Instructions</h2>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8' >
              <div className='w-[90%] mx-auto bg-blue-300 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  
                  <h2 className='text-2xl font-bold text-center py-8'>STEP 01</h2>
                  <p className='text-center text-4xl font-bold'>$130</p>
                  <div className='text-center font-medium '>
                    <p className='border-b mx-8 py-2 mt-8 border-t'>500GB Storage</p>
                    <p className='border-b mx-8 py-2'>upside down</p>
                    <p className='border-b mx-8 py-2'>SLIIT</p>
                  </div>
                  
              </div>
              <div className='w-[90%] mx-auto bg-gray-800 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-white'>
                  
                  <h2 className='text-2xl font-bold text-center py-8'>STEP 02</h2>
                  <div className='text-center font-medium '>
                    <p className='border-b mx-8 py-2 mt-8 border-t'>500GB Storage</p>
                    <p className='border-b mx-8 py-2'>upside down</p>
                    <p className='border-b mx-8 py-2'>SLIIT</p>
                  </div>
                  
              </div>
              <div className='w-[90%] mx-auto bg-blue-300 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              
                  <h2 className='text-2xl font-bold text-center py-8'>STEP 03</h2>
                  <p className='text-center text-4xl font-bold'>$300</p>
                  <div className='text-center font-medium '>
                    <p className='border-b mx-8 py-2 mt-8 border-t'>Unlimited Storage</p>
                    <p className='border-b mx-8 py-2'>Unlimited Rotation</p>
                    <p className='border-b mx-8 py-2'>SLIIT</p>
                  </div>
                  
              </div>
          </div>
        </div>
  
      </div>
    )
  }

export default Hero