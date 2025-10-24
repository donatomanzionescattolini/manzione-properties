import { Outlet, Navigate } from "react-router-dom";
import { getUserRole } from "../services/authService";
import React from "react";
export default function ProtectedRoute({ roles }) {
    const token = localStorage.getItem("token");
    const userRole = getUserRole();

    if (!token) return <Navigate to="/login" />;
    if (roles && !roles.includes(userRole)) return <Navigate to="/" />;

    return <Outlet />;
}
