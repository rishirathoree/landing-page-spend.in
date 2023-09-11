import React from 'react'
import { useSelector } from 'react-redux'
import pot from '../../../../assets/images/pot.png'
const Cateogories = () => {
  const catgry = useSelector(state=>state.product.categories)
  return (
    <>
    <div className='lg:p-20 md:p-12 sm:p-4'>
      <p className='font-semibold text-slate-700 text-sm pl-4'>Categories</p>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4'>
      {
        catgry.map((item,idx)=>{
          return(
            <>
            <div key={idx} className='duration-500 p-4 flex items-start space-x-2'>
              <img className='w-20 h-20 rounded-lg ring-1 ring-black/5' src={pot} alt="" />
              <span>
                <p className='font-semibold text-[12px]'>{item.type}</p>
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
