import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import RegImage from '../../../Assets/RegisterImage.png';
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
      <div className='hidden lg:flex h-full w-1/2 items-center justify-start bg-black'>
        <img src={RegImage} className='w-[700px] ' alt='' />
      </div>
    </div>
  );
};

export default SignUpPage;
