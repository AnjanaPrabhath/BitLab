// SignUpWithPassword.js
import React from 'react';

const SignUpWithPassword = ({ toggleTurn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className='w-80'>
      <input type='password' placeholder='Password' className='input-field' />
      <input type='tel' placeholder='Phone Number' className='input-field' />
      <button type='submit' className='btn'>
        Sign Up
      </button>
      <p className='mt-2 text-sm text-gray-400 cursor-pointer' onClick={toggleTurn}>Already have an account? Sign in</p>
    </form>
  );
};

export default SignUpWithPassword;
