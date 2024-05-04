import React, { useEffect, useState } from 'react';
import ProfileNavbar from '../Components/ProfileNavbar';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AdminPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <ProfileNavbar/>

      <div className='flex max-w-[1100px] justify-between mx-auto mt-[100px] text-white'>
        <h2 className='flex flex-col font-medium text-3xl'>
          Admin Dashboard
        </h2>

        {user && (
          <h3 className='font-light flex text-xl'>
            Logged in as : {user.displayName || user.email}
          </h3>
        )}

      </div>

      <div className='max-w-[1100px] mx-auto grid md:grid-cols-3 gap-8 mt-[100px] text-white text-xl'>
        <Link to='/student/student_details'>
          <button className='button'>Student Details..........</button>
        </Link>

        <Link to='/admin/academic_period'>
          <button className='button'>Academic Period</button>
        </Link> 
        
        <Link to='/admin/sandani/learning_portal'>
          <button className='button'>Learning Portal</button>
        </Link> 

        <Link to='/admin/sandani/SignUp/edit_student_form'>
          <button className='button'>Edit Personal details</button>
        </Link>

        <Link to='/admin/session_password'>
          <button className='button'>Session Password</button>
        </Link>

        <Link to='/student/sessions'>
          <button className='button'>My Sessions     .....</button>
        </Link>
          
      </div>
    </div>
  );
};

export default AdminPage;
