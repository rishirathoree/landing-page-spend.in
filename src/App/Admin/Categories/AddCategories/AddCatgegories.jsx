import React, { useState } from 'react'
import { addCategory } from '../../../../Store/Slices/ProductSlice';
import { useDispatch } from 'react-redux';

const AddCategories = () => {
    const [category,setCategory] = useState({
        id:new Date().getSeconds(),
        type:'',
        description:''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        setCategory({
          ...category,
          [name]: value,
        });
      };
      const dispatch = useDispatch()
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCategory(category))
        setCategory(category)

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
                
            </div>


            <div className='col-span-2'>
                {/* title descriptions */}
                <form onSubmit={handleSubmit} className='border-[1px] border-dashed p-8 space-y-8 rounded-lg flex items-start flex-col w-full'>
                <span className='space-y-2 w-full'>
                    <p className='font-medium text-[12px]' >Catgeory Name</p>
                    <span className='block space-y-1'>
                    <input onChange={handleInputChange} value={category.type} name='type' type="text" placeholder='Category Name' className='font-medium outline-none focus:outline-none text-sm p-3 rounded-sm ring-1 ring-black/5 w-full' />
                        <p className='font-medium text-gray-400 text-[10px]'>A Catgeory name is required and recommended to be unique.</p>
                    </span>
                </span>

                <span className='space-y-2 w-full'>
                    <p className='font-medium text-[12px]' >Catgeory Description</p>
                    <span className='block space-y-1'>
                    <input onChange={handleInputChange} value={category.description} name='description' type="text" placeholder='Catgeory Description' className='font-medium outline-none focus:outline-none text-sm p-3 rounded-sm ring-1 ring-black/5 w-full' />
                        <p className='font-medium text-gray-400 text-[10px]'>A Catgeory description is required and recommended to be unique.</p>
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

export default AddCategories
