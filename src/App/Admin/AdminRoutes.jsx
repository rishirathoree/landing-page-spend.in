import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AdminNavbar from "./AdminComponents/AdminNavbar";
import AdminSidebar from "./AdminComponents/AdminSidebar";
import { useSelector } from "react-redux";
import ViewProducts from "./Products/ViewProducts/ViewProducts";
import AddProducts from "./Products/AddProducts/AddProducts";
import DeleteProducts from "./Products/DeleteProducts/DeleteProducts";
import AddCategories from "./Categories/AddCategories/AddCatgegories";
import ViewCategories from "./Categories/ViewCategories/ViewCategories";
import DeleteCategories from "./Categories/DeleteCategories/DeleteCategories";
import EditCategories from "./Categories/EditCategories/EditCategories";

const AdminRoutes = () => {
  
  return (
    <>
      <div className="flex">
        <div className={`duration-200 w-1/5`}>
          <AdminSidebar />
        </div>
        <div className={`w-4/5 mt-[72px] overflow-y-auto overflow-hidden min-h-screen max-h-full  bg-slate-200/20 duration-100`}>
          <AdminNavbar />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/products/view-products" element={<ViewProducts />} />
            <Route path="/products/add-products" element={<AddProducts />} />
            <Route path="/products/delete-products" element={<DeleteProducts />} />
            <Route path="/products/add-category" element={<AddCategories />} />
            <Route path="/products/view-category" element={<ViewCategories />} />
            <Route path="/products/delete-category" element={<DeleteCategories />} />
            <Route path="/products/edit-category/:id" element={<EditCategories />} />
            
            
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminRoutes;
