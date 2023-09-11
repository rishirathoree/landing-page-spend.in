import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProctectRoute = ({ children }) => {
    const user = useSelector(state => state.user.currentUser)
    if (user && user.role === 'user') {
        return <Navigate to='/' />; // Corrected the return statement
    }
    if (user && user.role === 'admin') {
        return <Navigate to='/' />; // Corrected the return statement
    }
    return children;
}

export default ProctectRoute
