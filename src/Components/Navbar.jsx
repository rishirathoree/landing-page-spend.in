import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='fixed top-0 right-0 z-[500] w-full lg:px-20 md:px-12 sm:px-6 py-6 border-b-[0.5px] border-white/5 text-white flex items-center  justify-between'>
        <span className='cursor-pointer'><p className='font-bold text-lg capitalize -tracking-[1px]'>Spend.in</p></span>

        <ul className='inline-flex items-center space-x-6 lg:inline-flex md:hidden sm:hidden'>
            <li><p className='font-normal text-[12px]'>Products</p></li>
            <li><p className='font-normal text-[12px]'>Benefits</p></li>
            <li><p className='font-normal text-[12px]'>How it Works</p></li>
            <li><p className='font-normal text-[12px]'>Pricing</p></li>
            <li><p className='font-normal text-[12px]'>Company</p></li>
        </ul>

        <span className='inline-flex items-center space-x-4 lg:inline-flex md:inline-flex sm:hidden'>
        <p className='font-medium text-[12px]'>Login</p>
        <span><button className='font-medium text-[12px] px-4 py-2 bg-violet-500 rounded-full'>Get Demo</button></span>
        </span>

        <span className=' space-y-1 flex-col items-end lg:hidden md:hidden sm:inline-flex'>
        <span className='block w-2 h-[1px] bg-white'></span>
        <span className='block w-4 h-[1px] bg-white'></span>
        <span className='block w-4 h-[1px] bg-white'></span>
        </span>
    </div>
    </>
  )
}

export default Navbar
