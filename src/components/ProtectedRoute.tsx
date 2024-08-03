import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the sign-in page
    return <Navigate to="/login" replace />;
  }

  // If the user is authenticated, render the component passed to this route
  return <Outlet />;
};

export default ProtectedRoute;
