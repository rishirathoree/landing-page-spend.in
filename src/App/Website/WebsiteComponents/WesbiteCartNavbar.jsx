import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecreaseQuantityCartItem, IncreaseQuantityCartItem } from '../../../Store/Slices/userSlice'

const WesbiteCartNavbar = () => {
    const [toggleCart,setToggleCart] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user.currentUser)
    const overlay = useRef()
    const hidePopupUsingOverlay = (e) => {
        if(overlay.current && e.target === overlay.current){
            setToggleCart(false)
        }
    }
    return (
    <>
    <div>
    <span onClick={()=>{setToggleCart(true)}} className='inline-flex items-center flex-col'>
            <i className='bx cursor-pointer bx-basket'></i>
            <p className='font-semibold tracking-tight text-[10px]'>Cart</p>
    </span>
    <div ref={overlay} onClick={hidePopupUsingOverlay} className={`fixed duration-500 top-0 right-0 bg-white/40 w-full h-screen flex justify-end z-[500] ${toggleCart ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`w-1/3 h-full flex flex-col  duration-500 delay-200 bg-white border-l-[1px] border-black/5 ${toggleCart ? 'translate-x-0 skew-x-0' : 'translate-x-full skew-x-12'}`}>
            <span className='p-4 block flex-1 border-b-[1px] '>
                <p className='font-bold text-sm tracking-tighter'>Your Cart</p>
            </span>

            <div className='h-full w-full overflow-hidden overflow-y-auto space-y-2 flex flex-col'>
                {user && user.cartItems && user.cartItems.map((item,idx)=>{
                    return(
                        <>
                        <div className='flex p-4'>
                        <div className='w-60 h-40 rounded bg-gray-50'></div>
                        <div className='flex items-start justify-between flex-col p-4'>
                        <span className='block space-y-2'>
                        <span className='flex items-center justify-between'><p className='font-semibold text-[12px]'>{item.name}</p><i className='bx bx-x'></i></span>
                            <p className='font-medium text-[10px]'>{item.description}</p>
                        </span>
                        <span className='flex items-center gap-4'>
                            <i onClick={()=>{dispatch(DecreaseQuantityCartItem(item.id))}} className='bx bx-minus'></i>
                            <p className='font-medium text-gray-600 text-sm'>{item.qty}</p>
                            <i onClick={()=>{dispatch(IncreaseQuantityCartItem(item.id))}} className='bx  bx-plus'></i>
                        </span>
                        <div className='inline-flex items-center justify-between w-full'>
                                <p className='font-semibold text-sm'>Price</p>
                                <p className='font-medium text-sm tracking-tighter'>${item.price}</p>
                        </div>
                        </div>
                        </div>
                        </>
                    )
                })}
            </div>

            <span className='p-4 flex items-center justify-between flex-1 bg-white border-t-[1px]'>
                <p className='font-bold text-sm tracking-tighter'>Total</p>
                <p className='font-bold text-lg tracking-tighter'>23.00</p>
            </span>
        </div>
    </div>
    </div>
    </>
  )
}

export default WesbiteCartNavbar
