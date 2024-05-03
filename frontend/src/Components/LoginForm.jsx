import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyBwZXiN0c3l2oXnKoHs5uRtRx2AVr_riCY",
  authDomain: "bitlab-sliit.firebaseapp.com",
  projectId: "bitlab-sliit",
  storageBucket: "bitlab-sliit.appspot.com",
  messagingSenderId: "306720676781",
  appId: "1:306720676781:web:034412a38346dd82be1f24",
  measurementId: "G-4P2GQDY0W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginForm = ({ toggleTurn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
     // Prevent default form submission
     
     event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, username, password);
      navigate('/admin')
    } catch (error) {
      setError('User name or password is incorrect');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className='text-white'>
      <h1 className='text-3xl font-medium text-center'>Welcome to BitLab</h1>
      <p className='py-3'>Please enter your username and password</p>
      <div>
        <div>
          <input
            type="text"
            placeholder='Username'
            className='bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0] rounded-md px-2 py-2 my-2 border-blue-400 w-full'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='Password'
            className='bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0] rounded-md px-2 py-2 my-2 border-blue-400 w-full'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <form onSubmit={handleLogin}>
            <button type="submit" className='bg-[#06C6D5] my-5 px-4 py-1 w-full'>Login</button>
          </form>
          
          <p className='text-center'>If you don't have an account, 
            
          </p>
          <Link to="/SignUp/sign_up_page">
            <button className='bg-[#06C6D5] my-5 px-4 py-1 w-full'>SIGN UP</button>              
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
