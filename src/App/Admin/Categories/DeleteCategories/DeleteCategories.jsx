import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCategory } from '../../../../Store/Slices/ProductSlice'
const DeleteCategories = () => {
    const products = useSelector(state=>state.product.categories)
    const dispatch = useDispatch()
  return (
    <>
    <div className='p-8'>
        <div className='overflow-hidden border border-dashed bg-white rounded-xl z-50 border-gray-400/50 border-dashed border-[1px] py-4 px-6 space-y-6'>
        <div className='flex items-center justify-between'>
            <input type="text" className='p-2 rounded-lg ring-1 ring-black/5 text-[12px] font-medium outline-none focus:outline-none' placeholder='Search Products' />
            <Link to="/products/add-category"><button className='px-6 py-2 rounded bg-blue-400 font-medium text-[12px] text-white'>Add Catgeory</button></Link>
        </div>
        <table className='w-full table-auto '>
            <thead className='w-full'>
                <tr className='flex items-start justify-between w-full p-4 border-b-[1px] border-gray-400/10 border-dashed'>
                    <th className='items-start justify-start flex'>
                    <input id="draft" className="peer/check hidden" type="checkbox" name="status" />
                    <label htmlFor="draft" className="w-4 h-4 block bg-gray-100 rounded peer-checked/check:bg-sky-500 peer-checked/check:ring-1 peer-checked/check:ring-gray-500/10"></label>
                    </th>
                    <th className='w-[400px] items-start justify-start flex'><p className='font-semibold text-gray-500 text-sm'>Products</p></th>
                    <th className='w-[100px] items-start justify-start flex'><p className='font-semibold text-gray-500 text-sm'>Status</p></th>
                    <th className='w-[100px] items-start justify-start flex'><p className='font-semibold text-gray-500 text-sm'>Action</p></th>
                </tr>
            </thead>
            <tbody>
            {products.map((item,idx)=>{
                return(
                    <>
                    <tr className='flex items-center justify-between w-full p-4 border-y-[1px] border-gray-400/10 border-dashed'>
                    <td className=''>
                    <input id={item.name} className="peer/check hidden" type="checkbox" name="status" />
                    <label htmlFor={item.name} className="w-4 h-4 block bg-gray-100 rounded peer-checked/check:bg-sky-500 peer-checked/check:ring-1 peer-checked/check:ring-gray-500/10"></label>
                    </td>
                    <td className='w-[400px] flex items-start justify-start'>
                        <span>
                        <p className='font-semibold text-gray-500 text-sm'>{item.type}</p>
                        <p className='font-medium text-gray-500 text-[10px]'>{item.description}</p>
                        </span>
                    </td>
                    <td className='w-[100px]'><p className='font-semibold text-gray-500 text-sm'>{Math.floor(Math.random() * 5 + 1)}</p></td>
                    <td className='w-[100px] flex items-start justify-start'>
                        <i onClick={()=>{dispatch(deleteCategory(item.id))}} className='bx bx-trash'></i>
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

export default DeleteCategories
