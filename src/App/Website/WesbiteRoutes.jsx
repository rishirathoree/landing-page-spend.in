// WebsiteRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WebsiteNavbar from './WebsiteComponents/WebsiteNavbar';
import Home from './Home/Home';
import Login from './Auth/Login';
import WebsiteError from './Error/WebsiteError';
import ProctectRoute from './Auth/ProctectRoute';
import Products from './Products/Products';

const WebsiteRoutes = () => {
  return (
    <>
      <WebsiteNavbar />
      <div className='mt-[82px]'>
      <Routes>
        <Route path="/" element={<Home />} />
  
        <Route path="/Products" element={<Products />} />
        <Route path="/login" element={<ProctectRoute><Login /></ProctectRoute> } />
        <Route path="*" element={<WebsiteError />} />
      </Routes>
      </div>
    </>
  );
}

export default WebsiteRoutes;