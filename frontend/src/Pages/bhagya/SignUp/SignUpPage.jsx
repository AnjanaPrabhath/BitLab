import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import Logo from '../../../Assets/Logo.png';
import SignUpWithPassword from './SignUpWithPassword';

const SignUpPage = () => {
  const [turn, setTurn] = useState(true);

  const handleToggleTurn = () => {
    setTurn(!turn);
  };

  return (
    <div className='flex w-full h-screen'>
      {/* left screen */}
      <div className='w-full flex items-center justify-center lg:w-1/2 bg-black'>
        {turn ? <SignUpForm toggleTurn={handleToggleTurn}/> : <SignUpWithPassword toggleTurn={handleToggleTurn}/>}
      </div>
      
      {/* right screen */}
      <div className='hidden lg:flex h-full w-1/2 items-center justify-center bg-black'>
        <img src={Logo} className='w-[500px] animate-pulse' alt='' />
      </div>
    </div>
  );
};

export default SignUpPage;
