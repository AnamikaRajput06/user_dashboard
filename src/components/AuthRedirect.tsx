import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';

const AuthRedirect: React.FC = () => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    // If the user is authenticated, redirect to the dashboard
    return <Navigate to="/" replace />;
  }

  // If the user is not authenticated, render the component passed to this route
  return <Outlet />;
};

export default AuthRedirect;
