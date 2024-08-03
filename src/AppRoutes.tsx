// src/AppRoutes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AuthRedirect from './components/AuthRedirect';
import Layout from './components/Layout';
import AuthLayout from './components/AuthLayout';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap the sign-in and sign-up routes with the AuthRedirect component */}
        <Route element={<AuthRedirect />}>
          <Route element={<AuthLayout />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Route>
        {/* Wrap the protected routes with the ProtectedRoute component */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            {/* Add other protected routes here */}
          </Route>
        </Route>
        {/* Redirect to SignIn by default */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
