import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import pot from '../../../../assets/images/pot.png'
import { addItemtoCart } from '../../../../Store/Slices/userSlice'

const Products = () => {
  const dispatch = useDispatch()
    const productsShop = useSelector(state=>state.product.storeProducts)
  return (
    <>
    <div className='lg:px-20 md:px-12 sm:px-4'>
      <p className='font-semibold text-slate-700 text-sm pl-4'>Shop Products</p>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
      {
        productsShop.map((item,idx)=>{
          return(
            <>
            <div key={idx} className='duration-500 p-4 space-y-6 '>
              <img className='w-full h-[350px] rounded-lg ring-1 object-cover ring-black/5' src={pot} alt="" />
              <span className='block space-y-2'>
                <p className='font-semibold text-[12px]'>{item.name}</p>
                <p className='font-light text-[10px]'>{item.description}</p>
                <span className='inline-flex justify-between w-full items-center'>
                <p className='font-semibold tracking-tighter text-[14px]'>${item.price}</p>
                <button onClick={()=>{dispatch(addItemtoCart(item))}} className='px-6 py-2 overflow-hidden hover:text-white font-semibold ring-1 relative after:absolute after:-z-50 hover:after:w-40 after:w-0 after:duration-300 after:h-40 after:bg-black after:-top-8 after:-left-8 after:scale-0 hover:after:scale-100 after:rounded-full ring-black/5 text-[10px]'>Add to cart</button>
                </span>
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

export default Products
