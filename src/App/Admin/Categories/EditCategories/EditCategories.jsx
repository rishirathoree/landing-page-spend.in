import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateCategory } from '../../../../Store/Slices/ProductSlice';

const EditCategories = () => {
  const categories = useSelector((state) => state.product.categories);
  const dispatch = useDispatch();
  const { id } = useParams();

  // Find the category by ID
  const initialCategory = categories.find((cat) => cat.id === parseInt(id));

  const [updatedCategory, setUpdatedCategory] = useState({
    id: '',
    type: '',
    description: '',
  });

  useEffect(() => {
    if (initialCategory) {
      setUpdatedCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Dispatch the action to update the category
    dispatch(updateCategory(updatedCategory));

    // Redirect or perform other actions as needed after editing
    // For example, you can redirect to the category list page.
  };

  return (
    <>
      <div className='p-8'>
        <div className='grid grid-cols-3 bg-white p-4 gap-4'>
          {/* Rest of your code */}
          <div className='col-span-2'>
            {/* title descriptions */}
            <form
              onSubmit={handleFormSubmit}
              className='border-[1px] border-dashed p-8 space-y-8 rounded-lg flex items-start flex-col w-full'
            >
              <span className='space-y-2 w-full'>
                <p className='font-medium text-[12px]'>Category Name</p>
                <span className='block space-y-1'>
                  <input
                    value={updatedCategory.type}
                    onChange={(e) =>
                      setUpdatedCategory({ ...updatedCategory, type: e.target.value })
                    }
                    name='type'
                    type='text'
                    placeholder='Category Name'
                    className='font-medium outline-none focus:outline-none text-sm p-3 rounded-sm ring-1 ring-black/5 w-full'
                  />
                  <p className='font-medium text-gray-400 text-[10px]'>
                    A Category name is required and recommended to be unique.
                  </p>
                </span>
              </span>

              <span className='space-y-2 w-full'>
                <p className='font-medium text-[12px]'>Category Description</p>
                <span className='block space-y-1'>
                  <input
                    value={updatedCategory.description}
                    onChange={(e) =>
                      setUpdatedCategory({ ...updatedCategory, description: e.target.value })
                    }
                    name='description'
                    type='text'
                    placeholder='Category Description'
                    className='font-medium outline-none focus:outline-none text-sm p-3 rounded-sm ring-1 ring-black/5 w-full'
                  />
                  <p className='font-medium text-gray-400 text-[10px]'>
                    A Category description is required and recommended to be unique.
                  </p>
                </span>
              </span>

              <button
                type='submit'
                className='px-6 py-2 rounded bg-blue-500 text-white font-medium capitalize'
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategories;
