import React from 'react'
import Poster from '../Assets/MainPoster.png'
import LogoIcon from '../Assets/logoImageWithoutText.png'


const Compilor = () => {
    return (
      <div className='text-white bg-black'>
          <div className='max-w-[1300px] w-full mx-auto'>
            
              
              <div className='absolute w-full h-[550px] bg-black opacity-30'></div>
        
             {/* heading */}
             <img className='mt-[70px] w-full '
              src={Poster} alt="" />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>


                  <div className='uppercase text-center'>
                    <p className='my-4 text-xl'>connect with the best classroom</p>

                    <img src={LogoIcon} 
                    className='w-[50px] mx-auto'
                    alt="" />

                    <p className='my-4 mb-8 text-5xl'>b i t l a b</p>
                  </div>

                  <div className='flex my-4 justify-center'>
                    <button className='bg-[#06C6D5] w-[150px] text-black font-semibold hover:bg-[#2df1ff] duration-300 py-2 px-4 flex justify-center'>
                      LOGIN</button>
                    
                  </div>                  

                </div>
            </div> 

            {/* compilor i frame */}
            <div className='max-w-[1000px] w-full h-screen '>
                
            </div>
      </div>
    )
  }

export default Compilor