import React, { useEffect, useRef } from 'react';

const AdminNavbar = () => {
  return (
    <>
      <div className='p-6 bg-white flex items-center justify-end w-4/5 fixed top-0 right-0'>
        <span className='inline-flex items-center space-x-4'>
        <i className='bx hover:text-orange-500 text-xl bx-sun'></i>
        <i className='bx hover:text-orange-500 text-xl bx-qr-scan'></i>
        </span>
      </div>
    </>
  );
};

export default AdminNavbar;

// navbar height 76 