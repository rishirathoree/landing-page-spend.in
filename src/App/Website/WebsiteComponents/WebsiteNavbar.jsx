import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../Store/Slices/userSlice'
const WebsiteNavbar = () => {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user.currentUser)
  
  return (
    <>
    <div className='lg:px-20 md:px-12 sm:px-8 py-4 fixed top-0 right-0 w-full flex items-center justify-between z-[500]'>
        <Link to="/"><span><p className='font-bold text-lg tracking-tighter'>Hygge</p></span></Link>

        <div className='flex items-center space-x-6'>
            <i className='bx cursor-pointer bx-shopping-bag'></i>
            {user ? 
            <i onClick={()=>{dispatch(logout())}} className='bx cursor-pointer bx-log-out'></i>
            :
            <Link to="/login"><button className='px-6 py-2 rounded-full bg-blue-300 hover:bg-blue-400 duration-700 font-semibold text-[12px] text-white'>Login</button></Link>
            }
        </div>
    </div>
    </>
  )
}

export default WebsiteNavbar
