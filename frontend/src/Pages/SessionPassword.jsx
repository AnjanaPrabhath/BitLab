import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SessionPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNextClick = () => {
    // Perform validation
    if (!password.trim() || !confirmPassword.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter both password fields!',
      });
      return;
    }
  
    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
      });
      return;
    }
  
    // If validations pass, show success message
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Passwords matched and submitted successfully!',
    });
  
    // Clear input fields after successful submission
    setPassword('');
    setConfirmPassword('');
  };
  

  return (
    <div>
      <Navbar />

      <div className='flex max-w-[1100px] justify-between mx-auto mt-[50px]  text-white'>
        <h2 className='flex flex-col font-medium text-3xl'>Session Password</h2>

        <h3 className='font-light flex text-xl'>logged in as : Dissanayake D M A P</h3>
      </div>

      <div className='flex flex-col items-center justify-center mt-[50px]'>
        <div className='bg-gray-700 w-[600px] h-[350px]'>
          <div className='flex flex-col items-center text-center'>
            <h2 className='text-white text-xl py-8'>Generate aRandom Password</h2>

            <input
              type='password'
              placeholder='new password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='text-center mt-[30px] w-[400px] bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400'
            />
            <input
              type='password'
              placeholder='confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='text-center w-[400px] bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400'
            />

            <button className='bg-[#06C6D5] hover:bg-[#2df1ff] duration-300 my-5 px-8 py-2' onClick={handleNextClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionPassword;
