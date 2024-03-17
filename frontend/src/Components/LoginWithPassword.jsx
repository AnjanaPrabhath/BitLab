import React from 'react'

const LoginWithPassword = ({toggleTurn}) => {
  return (
    
    <div className='text-white'>
      <button className='absolute' onClick={toggleTurn}>Back</button>
        <h1 className='text-3xl font-medium text-center'>Welcome </h1>
        <p className='py-3'>please enter your username and wait for your password </p>
        <div>
            <div>
                <input type="text"
                placeholder='username'
                className='bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400 w-full'
                />
            </div>
            <div>
              
                <button className='bg-blue-400 my-5 px-4 py-1 w-full'>Login</button>              
              
            </div>
        </div>
    </div>
  )
}

export default LoginWithPassword