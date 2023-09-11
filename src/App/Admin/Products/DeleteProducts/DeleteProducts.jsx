
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../../../Store/Slices/ProductSlice'

const DeleteProducts = () => {
    const dispatch = useDispatch()
    const products = useSelector(state=>state.product.storeProducts)
    console.log(products)
  return (
    <>
    <div className='p-8'>
        <div className='overflow-hidden border border-dashed bg-white rounded-xl z-50 border-gray-400/50 border-dashed border-[1px] py-4 px-6 space-y-6'>
        <div className='flex items-center justify-between'>
            <input type="text" className='p-2 rounded-lg ring-1 ring-black/5 text-[12px] font-medium outline-none focus:outline-none' placeholder='Search Products' />
            <Link to="/products/add-products"><button className='px-6 py-2 rounded bg-blue-400 font-medium text-[12px] text-white'>Add Products</button></Link>
        </div>
        <table className='w-full table-auto '>
            <thead className='w-full'>
                <tr className='flex items-center justify-between w-full p-4 border-b-[1px] border-gray-400/10 border-dashed'>
                    <th className='w-[100px] items-start justify-start flex'>
                    <input id="draft" className="peer/check hidden" type="checkbox" name="status" />
                    <label htmlFor="draft" className="w-4 h-4 block bg-gray-100 rounded peer-checked/check:bg-sky-500 peer-checked/check:ring-1 peer-checked/check:ring-gray-500/10"></label>
                    </th>
                    <th className='w-[200px] items-start justify-start flex'><p className='font-semibold text-gray-500 text-sm'>Products</p></th>
                    <th className='w-[100px] items-start justify-start flex'><p className='font-semibold text-gray-500 text-sm'>SKU</p></th>
                    <th className='w-[100px] items-start justify-start flex'><p className='font-semibold text-gray-500 text-sm'>QTY</p></th>
                    <th className='w-[100px] items-start justify-start flex'><p className='font-semibold text-gray-500 text-sm'>Price</p></th>
                    <th className='w-[100px] items-start justify-start flex'><p className='font-semibold text-gray-500 text-sm'>Rating</p></th>
                    <th className='w-[100px] items-start justify-start flex'><p className='font-semibold text-gray-500 text-sm'>Status</p></th>
                    <th className='w-[100px] items-start justify-start flex'><p className='font-semibold text-gray-500 text-sm'>Action</p></th>
                </tr>
            </thead>
            <tbody>
            {products.map((item,idx)=>{
                return(
                    <>
                    <tr className='flex items-center justify-between w-full p-4 border-y-[1px] border-gray-400/10 border-dashed'>
                    <td className='w-[100px]'>
                    <input id={item.name} className="peer/check hidden" type="checkbox" name="status" />
                    <label htmlFor={item.name} className="w-4 h-4 block bg-gray-100 rounded peer-checked/check:bg-sky-500 peer-checked/check:ring-1 peer-checked/check:ring-gray-500/10"></label>
                    </td>
                    <td className='w-[200px] '><p className='font-semibold text-gray-500 text-sm'>{item.name}</p></td>
                    <td className='w-[100px]'><p className='font-semibold text-gray-500 text-sm'>{Math.floor(Math.random() * 20)}</p></td>
                    <td className='w-[100px]'><p className='font-semibold text-gray-500 text-sm'>{Math.floor(Math.random() * 20)}</p></td>
                    <td className='w-[100px]'><p className='font-semibold text-gray-500 text-sm'>${item.price}</p></td>
                    <td className='w-[100px]'><p className='font-semibold text-gray-500 text-sm'>{Math.floor(Math.random() * 5 + 1)}</p></td>
                    <td className='w-[100px]'><p className='font-semibold text-gray-500 text-sm'>Status</p></td>
                    <td className='w-[100px] flex items-center justify-start'>
                        <span className=''>
                            <i onClick={()=>{dispatch(deleteProduct(item.id))}} className='bx bx-trash'></i>
                        </span>
                    </td>
                </tr>
                    </>
                )
            })}
            </tbody>
        </table>
        </div>
    </div>
    </>
  )
}

export default DeleteProducts
