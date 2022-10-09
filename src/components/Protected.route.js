import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation()
  const isLogin = location.state;

  if (isLogin) {
    return children;
  }
  return <Navigate to='/' />;
};
export default ProtectedRoute;