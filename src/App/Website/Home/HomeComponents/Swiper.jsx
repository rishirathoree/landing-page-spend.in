import React from 'react'
import banner from '../../../../assets/images/frame 1.png'
const Swiper = () => {
  const dots = Array(3).fill(1)
  return (
    <>
    <div className='relative'>
      <span className='inline-flex absolute bottom-8 left-8 items-center space-x-2'>
        {dots.map((item,idx)=><span key={idx} className={`w-3 h-3 rounded-full ${idx == 1 ? 'bg-white' : 'bg-gray-400 '}`}></span>)}
      </span>
        <img src={banner} alt="" />
    </div>
    </>
  )
}

export default Swiper
