import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import WebsiteRoutes from './Website/WesbiteRoutes';
import AdminRoutes from './Admin/AdminRoutes';
import { useSelector } from 'react-redux';

const RouteDecider = () => {
  const user = useSelector((state) => state.user.currentUser);
  const role = user ? user.role : null;
  console.log(role)
  return (
    <>
      {role === 'user' || role === null ? <WebsiteRoutes /> : <AdminRoutes />}
    </>
  );
}

export default RouteDecider;
