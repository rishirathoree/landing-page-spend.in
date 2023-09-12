import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../../../Store/Slices/userSlice'
import WesbiteCartNavbar from './WesbiteCartNavbar'

const WebsiteNavbar = () => {
  const navlinks = [
    {
      name:'Products',
      link:'/products',
    },
    {
      name:'About',
      link:'/About',
    },
    {
      name:'Blog',
      link:'/Blog',
    },
  ]
  const dispatch = useDispatch()
  const location = useLocation()
  const user = useSelector(state=>state.user.currentUser)
  const users = useSelector(state=>state.user.users)
  console.log(user)
  return (
    <>
    <div className='lg:px-20 md:px-12 sm:px-8 py-6 fixed top-0 right-0 w-full flex items-center justify-between z-[500] bg-white'>
        <Link to="/">
          <span className='inline-flex items-center space-x-1'>
          <i className='bx bx-exclude text-xl'></i>
          <p className='font-extrabold text-xl tracking-tighter'>Burr</p>
          </span></Link>

          <ul className='inline-flex items-center gap-8 lg:inline-flex md:hidden sm:hidden capitalize'>
            {navlinks.map((item,idx)=>{
              return(
                <>
                <Link to={`${item.link}`}>
                <li>
                  <p className={`font-semibold tracking-tight text-[12px] relative after:absolute after:w-full after:h-[2px] ${location.pathname === item.link ? 'after:bg-black after:-bottom-1 after:left-0' : 'hover:after:scale-x-100 after:scale-x-0 after:duration-500 cursor-pointer after:origin-left after:bg-black after:-bottom-1 after:left-0'}`}>{item.name}</p>
                </li>
                </Link>
                </>
              )
            })}
          </ul>

        <div className='flex items-center space-x-6'>
            
        <WesbiteCartNavbar />

            <div>
            <span className='inline-flex items-center flex-col'>
            <i className='bx cursor-pointer bx-heart'></i>
            <p className='font-semibold tracking-tight text-[10px]'>Favourites</p>
            </span>
            </div>

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
// 82 is height 