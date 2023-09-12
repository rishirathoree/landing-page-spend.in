import React from 'react'
import { useSelector } from 'react-redux'
import chair from '../../../../assets/images/chair.png'
const Cateogories = () => {
  const catgry = useSelector(state=>state.product.categories)
  return (
    <>
    <div className='lg:p-20 md:p-12 sm:p-4'>
      <p className='font-semibold text-slate-700 text-sm pl-4'>Categories</p>
      <div className='flex items-center overflow-hidden gap-4'>
      {
        catgry.map((item,idx)=>{
          return(
            <>
            <div key={item.id} className='min-w-[300px] duration-500 p-4 flex items-start space-x-2'>
              <img className='w-8 h-8 rounded-full ring-1 ring-black/5' src={chair} alt="" />
              <span>
                <p className='font-semibold text-[12px]'>{item.name}</p>
                <p className='font-light text-[10px]'>{item.description}</p>
              </span>
            </div>
            </>
          )
        })
      }
      </div>
    </div>
    </>
  )
}

export default Cateogories
