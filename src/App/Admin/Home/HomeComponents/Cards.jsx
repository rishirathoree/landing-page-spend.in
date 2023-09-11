import React from 'react'
import pot from '../../../../assets/images/pot.png'
import { useSelector } from 'react-redux'
const Cards = () => {
  const products = useSelector(state=>state.product)
  return (
    <>
    <div className='p-8 grid grid-cols-3 gap-4'>
       <div className={`h-80 rounded-xl overflow-hidden flex items-center justify-center relative bg-violet-600 text-white`}>
        <span className='block space-y-4 text-center'>
          <p className='font-medium text-sm'>Total Products</p>
          <p className='font-semibold text-[4rem]'>{products.storeProducts.length}</p>
        </span>
       </div>
       <div className={`h-80 rounded-xl overflow-hidden flex items-center justify-center relative bg-violet-600 text-white col-span-2`}>
        <span className='block space-y-4 text-center'>
          <p className='font-medium text-sm'>Total Categories</p>
          <p className='font-semibold text-[4rem]'>{products.categories.length}</p>
        </span>
       </div>
    </div>
    </>
  )
}

export default Cards
