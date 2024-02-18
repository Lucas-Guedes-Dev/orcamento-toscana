import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
    const storedLogado = localStorage.getItem('logado');
    return storedLogado ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
