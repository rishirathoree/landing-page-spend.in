import React, { useEffect, useState } from 'react'
import pot from '../../../assets/images/pot.png'
import { matchLoginCredential } from '../../../Store/Slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch()
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });

  const handleLoginCredentials = (e) => {
    e.preventDefault();
    // Access the input values using the event target name
    const { name, value } = e.target;
    // Update the state with the input value
    setLoginCredentials({
      ...loginCredentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(matchLoginCredential(loginCredentials))
  };
  return (
    <>
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 h-screen overflow-hidden'>
      <div className='flex w-full h-full items-center justify-center'>
        <form onSubmit={handleSubmit} className='block space-y-8 p-12 w-full'>
          <p className='font-bold text-2xl'>Sign In</p>
          <p className='font-bold text-sm text-gray-600'>Hurry Up! Grab your clothing</p>
          <span className='block space-y-6'>
            <input onChange={handleLoginCredentials} name='email' type="text" placeholder='Enter Email' className='outline-none bg-green-500/10 w-full p-3 rounded-sm text-sm' />
            <input onChange={handleLoginCredentials} name='password' type="text" placeholder='Enter Password' className='outline-none bg-green-500/10 w-full p-3 rounded-sm text-sm' />
          </span>
          <button className='font-semibold text-sm text-white bg-blue-500 px-6 py-2'>Login</button>
        </form>
      </div>
      <div className='lg:block border-l-[1px] border-black/5 border-dashed md:block sm:hidden h-full w-full flex items-center justify-center'>
        <span className='flex items-center justify-center h-full'><img src={pot} className='w-80 block bg-blend-overlay h-80 object-cover' alt="" /></span>
      </div>
    </div>
    </>
  )
}

export default Login
