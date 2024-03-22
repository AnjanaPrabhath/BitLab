import React, { useState } from 'react';
import Logo from '../../../Assets/Logo.png';

const CompilerSPage = () => {

  return (
    <div className='flex w-full h-screen'>
      {/* left screen */}
      <div className='w-full flex items-center justify-center lg:w-1/2 bg-black'>

      </div>
      
      {/* right screen */}
      <div className='hidden lg:flex h-full w-1/2 items-center justify-center bg-black'>
        <img src={Logo} className='w-[500px] animate-pulse' alt='' />
      </div>
    </div>
  );
};

export default CompilerSPage;
