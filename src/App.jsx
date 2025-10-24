import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tenants from "./pages/Tenants";
import Properties from "./pages/Properties";
import Payments from "./pages/Payments";
import Maintenance from "./pages/Maintenance";
import Reports from "./pages/Reports";
import TenantPortal from "./pages/TenantPortal";
import ProtectedRoute from "./components/ProtectedRoute";
import { getUserRole } from "./services/authService";
import React from "react";
export default function App() {
    const role = getUserRole();

    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            {/* Default redirect behavior */}
            <Route
                path="/"
                element={
                    !role ? (
                        <Navigate to="/login" />
                    ) : role === "ADMIN" ? (
                        <Navigate to="/dashboard" />
                    ) : (
                        <Navigate to="/tenant" />
                    )
                }
            />

            {/* Admin Portal */}
            <Route element={<ProtectedRoute roles={["ADMIN"]} />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/tenants" element={<Tenants />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/reports" element={<Reports />} />
            </Route>

            {/* Tenant Portal */}
            <Route element={<ProtectedRoute roles={["TENANT"]} />}>
                <Route path="/tenant" element={<TenantPortal />} />
            </Route>

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
