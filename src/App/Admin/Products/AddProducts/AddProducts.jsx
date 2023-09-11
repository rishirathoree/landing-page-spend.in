import React, { useState } from 'react'
import { addProducts } from '../../../../Store/Slices/ProductSlice';
import { useDispatch } from 'react-redux';

const AddProducts = () => {
    const [product,setProduct] = useState({
        id:new Date().getSeconds(),
        name:'',
        sku:'',
        quantity:'',
        price:'',
        status:'active',
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        setProduct({
          ...product,
          [name]: value,
        });
      };
      const dispatch = useDispatch()
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProducts(product))
        setProduct(product)

      }
  return (
    <>
    <div className='p-8'>
        <div className='grid grid-cols-3 bg-white p-4 gap-4'>
            <div className='w-full space-y-4'>
                {/* add thumbnail */}
                <div className='border-[1px] border-dashed p-8 space-y-8 rounded-lg flex items-center flex-col '>
                    <p className='font-medium text-sm text-left w-full'>Thumbnail</p>
                    <span className='block p-4 drop-shadow-lg flex items-center w-40 h-40 rounded-xl justify-center bg-white'>
                        <i className='bx bx-images text-gray-500 text-[4rem]'></i>
                        <i className='bx bx-pencil p-1 rounded-full shadow absolute -top-2 -right-2 bg-white'></i>
                    </span>
                    <p className='font-medium text-gray-500 text-[10px] text-center'>Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted</p>
                </div>

                <div className='border-[1px] border-dashed p-4 relative space-y-8 rounded-lg flex items-center flex-col '>
                    <span className='w-full block group'>
                    <span className='flex items-center justify-between w-full'>
                    <p className='font-medium capitalize text-[12px]'>{product.status}</p>
                    <i className='bx bx-chevron-down'></i>
                    </span>
                    <span className='absolute opacity-0 group-hover:opacity-100 group-hover:visible invisible top-14 after:absolute after:-top-6 after:opacity-0 after:right-0 after:bg-black after:h-8 after:w-full rounded-lg right-0 w-full bg-white w-full shadow'>
                    <span onClick={() => { setProduct(p => ({ ...p, status: 'active' })) }} className='flex cursor-pointer items-center justify-between p-3 w-full'><p className='font-medium text-[12px]'>Active</p><em className='w-4 h-4 rounded-full bg-green-500/80'></em></span>
                    <span onClick={() => { setProduct(p => ({ ...p, status: 'inactive' })) }} className='flex cursor-pointer items-center justify-between p-3 w-full'><p className='font-medium text-[12px]'>Pending</p><em className='w-4 h-4 rounded-full bg-orange-500/80'></em></span>
                    <span onClick={() => { setProduct(p => ({ ...p, status: 'pending' })) }} className='flex cursor-pointer items-center justify-between p-3 w-full'><p className='font-medium text-[12px]'>Inactive</p><em className='w-4 h-4 rounded-full bg-red-500/80'></em></span>
                    <span onClick={() => { setProduct(p => ({ ...p, status: 'submission' })) }} className='flex cursor-pointer items-center justify-between p-3 w-full'><p className='font-medium text-[12px]'>Submission</p><em className='w-4 h-4 rounded-full bg-green-500/80'></em></span>
                    </span>
                    </span>
                </div>
                
            </div>


            <div className='col-span-2'>
                {/* title descriptions */}
                <form onSubmit={handleSubmit} className='border-[1px] border-dashed p-8 space-y-8 rounded-lg flex items-start flex-col w-full'>
                <span className='space-y-2 w-full'>
                    <p className='font-medium text-[12px]' >Product Name</p>
                    <span className='block space-y-1'>
                    <input onChange={handleInputChange} value={product.name} name='name' type="text" placeholder='Product Name' className='font-medium outline-none focus:outline-none text-sm p-3 rounded-sm ring-1 ring-black/5 w-full' />
                        <p className='font-medium text-gray-400 text-[10px]'>A Product name is required and recommended to be unique.</p>
                    </span>
                </span>

                <span className='space-y-2 w-full'>
                    <p className='font-medium text-[12px]' >SKU</p>
                    <span className='block space-y-1'>
                    <input onChange={handleInputChange} value={product.sku} name='sku' type="text" placeholder='sku' className='font-medium outline-none focus:outline-none text-sm p-3 rounded-sm ring-1 ring-black/5 w-full' />
                        <p className='font-medium text-gray-400 text-[10px]'>A SKU is required and recommended to be unique.</p>
                    </span>
                </span>

                <span className='space-y-2 w-full'>
                    <p className='font-medium text-[12px]' >Quantity</p>
                    <span className='block space-y-1'>
                    <input name='quantity' onChange={handleInputChange} value={product.quantity} type="text" placeholder='Quantity' className='font-medium outline-none focus:outline-none text-sm p-3 rounded-sm ring-1 ring-black/5 w-full' />
                        <p className='font-medium text-gray-400 text-[10px]'>A Quantity is required and recommended to be unique.</p>
                    </span>
                </span>

                <span className='space-y-2 w-full'>
                    <p className='font-medium text-[12px]' >Price</p>
                    <span className='block space-y-1'>
                    <input name='price' onChange={handleInputChange} value={product.price} type="text" placeholder='Price' className='font-medium outline-none focus:outline-none text-sm p-3 rounded-sm ring-1 ring-black/5 w-full' />
                        <p className='font-medium text-gray-400 text-[10px]'>A Price is required and recommended to be unique.</p>
                    </span>
                </span>


                <button type='submit' className='px-6 py-2 rounded bg-blue-500 text-white font-medium capitalize'>add</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddProducts
