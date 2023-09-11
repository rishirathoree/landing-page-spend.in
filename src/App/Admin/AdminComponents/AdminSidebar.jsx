import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { toggleSidebar } from '../../../Store/Slices/appStateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Store/Slices/userSlice';

const AdminSidebar = () => {
  const sidebarContent = [
    {
      name: 'Dashboard',
      icon: 'bx-home-alt',
      link: '/',
    },
    {
      name: 'Products',
      icon: 'bx-package',
      subMenus: [
        {
          name: 'View Products',
          icon: null,
          link: 'products/view-products',
        },
        {
          name: 'Add Products',
          icon: null,
          link: 'products/add-products',
        },
        {
          name: 'Delete Products',
          icon: null,
          link: 'products/delete-products',
        },
        {
          name: 'Edit Products',
          icon: null,
          link: 'products/edit-products',
        },
      ],
    },
    {
      name: 'Category',
      icon: 'bx-braille',
      subMenus: [
        {
          name: 'View Category',
          icon: null,
          link: 'products/view-category',
        },
        {
          name: 'Add Category',
          icon: null,
          link: 'products/add-category',
        },
        {
          name: 'Delete Category',
          icon: null,
          link: 'products/delete-category',
        },
        {
          name: 'Edit Category',
          icon: null,
          link: 'products/edit-category',
        },
      ],
    },
    {
      name: 'Mail',
      icon: 'bx-mail-send',
      link: '/',
    },
    {
      name: 'Inventory',
      icon: 'bxs-factory',
      link: '/',
    },
    {
      name: 'Setting',
      icon: 'bx-cog',
      link: '/',
    },
  ];
  const navigate = useNavigate()
  const location = useLocation();
  const toggleSidebarWidth = useSelector(state=>state.appState.toggleSidebarWidth)
  const dispatch = useDispatch()
  const activePath = location.pathname;
  const matchingSubmenuIndex = sidebarContent.findIndex((item) =>
  item.subMenus?.some((subMenus) => activePath.includes(subMenus.link))
  );
  const [expanded, setExpanded] = useState(matchingSubmenuIndex);
  const handleToggle = (idx) => {
    setExpanded((prevExpanded) => (prevExpanded === idx ? null : idx));
  };
  return (
    <>
      <aside className='h-screen fixed top-0 left-0 w-1/5 flex flex-col'>
        <div className=''>
          <span className='p-8 inline-flex items-center justify-between w-full border-b-[1px] border-dashed'>
            <p className='font-extrabold text-2xl tracking-tighter'>Hygge</p>
            <i className='bx bx-cog text-[20px]'></i>
          </span>
        </div>
        <ul className='px-4 py-2 h-full overflow-hidden overflow-y-auto'>
          {sidebarContent.map((item, idx) => {
            return (
              <li key={idx}>
                <span
                  onClick={() => {
                    handleToggle(idx);
                  }}
                  className='flex items-center py-2 justify-between'
                >
                  <Link to={item.link}>
                    <span className='inline-flex items-center space-x-2'>
                      <i className={`bx ${item.icon}`}></i>
                      <p className={`font-light text-[12px]`}>{item.name}</p>
                    </span>
                  </Link>
                  {item.subMenus && (
                    <i className={`bx duration-500 bx-chevron-down
                    ${expanded === idx ? 'rotate-180' : ''} 
                  `}></i>
                  )}
                </span>
                <ul
                  className={`overflow-hidden ${
                    item.subMenus && idx === expanded ? 'duration-1000 max-h-[400px]' : 'duration-0 max-h-0'}
                  
                    `}
                >
                  {item.subMenus &&
                    item.subMenus.map((subMenus, idx) => {
                      return (
                        <li key={idx} >
                          <Link to={subMenus.link}>
                            <p className='pl-8 py-2 font-medium text-gray-600 text-[10px]'>{subMenus.name}</p>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
          <li className='space-y-4 p-2 rounded-lg bg-teal-50'>
            <span className='flex mb-2 items-center justify-between'>
              <p className='font-medium text-[10px] px-2 py-1 rounded bg-blue-300'>Beta</p>
              <i className='bx bx-x'></i>
            </span>
          <span><p className='font-light text-[12px]'>Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.</p></span>
          <p className='font-semibold text-[10px] underline'>Turn new navigation off</p>
          </li>
        </ul>

        <div className=''>
          <span className='p-8 inline-flex items-center justify-between w-full border-t-[1px] border-dashed'>
            <p className='font-extrabold text-2xl tracking-tighter'>Logout</p>
            <i onClick={()=>{
              dispatch(logout())
              navigate('/login')
              }} className='bx bx-log-out scale-x-[-1] text-[20px]'></i>
          </span>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
