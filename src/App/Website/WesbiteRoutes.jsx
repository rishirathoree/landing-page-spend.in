// WebsiteRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WebsiteNavbar from './WebsiteComponents/WebsiteNavbar';
import Home from './Home/Home';
import Login from './Auth/Login';
import WebsiteError from './Error/WebsiteError';
import ProctectRoute from './Auth/ProctectRoute';


const WebsiteRoutes = () => {
  return (
    <>
      <WebsiteNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<ProctectRoute><Login /></ProctectRoute> } />
        <Route path="*" element={<WebsiteError />} />
      </Routes>
    </>
  );
}

export default WebsiteRoutes;