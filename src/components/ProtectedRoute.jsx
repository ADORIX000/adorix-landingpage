import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingPage from './common/LoadingPage';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        // Show the professional loading page while checking auth state
        return <LoadingPage />;
    }

    if (!isAuthenticated) {
        // Redirect to signup and remember where they were trying to go
        return <Navigate to="/signup" state={{ from: location, error: 'Please create an account to access this page.' }} replace />;
    }

    return children;
};

export default ProtectedRoute;
