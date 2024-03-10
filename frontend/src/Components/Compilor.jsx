import React from 'react'
import Poster from '../Assets/MainPoster.png'
import LogoIcon from '../Assets/logoImageWithoutText.png'


const Compilor = () => {
    return (
      <div className='text-white bg-black'>
        <div className='items-center'>

          <div className='max-w-[1300px] w-full mx-auto'>
            
            <div className='absolute w-full h-[600px] bg-black opacity-40'></div>
        
            {/* heading */}
            <img className='mt-[70px] w-[1300px] mx-auto' src={Poster} alt="" />
              <div className='absolute w-full top-[20%] mx-auto '>

                <div className='uppercase text-center mt-[50px]'>
                  <p className='my-4 md:my-10 text-xl md:text-4xl md:mt-6'>connect with the best classroom</p>

                  <img src={LogoIcon} 
                  className='w-[50px] md:w-[100px] mx-auto'
                  alt="" />

                  <p className='my-4 mb-8 text-5xl md:text-8xl'>b i t l a b</p>
                </div>

                <div className='flex my-4 justify-center'>
                  <button className='mt-8 bg-[#06C6D5] w-[150px] text-black font-semibold hover:bg-[#2df1ff] duration-300 py-2 px-4 flex justify-center'>
                    LOGIN</button>
                  
                </div>                  

              </div>
          </div> 

        </div>
      </div>
    )
  }

export default Compilor