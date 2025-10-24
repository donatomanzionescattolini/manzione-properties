import {Navigate, Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TenantPortal from "./pages/TenantPortal";
import ProtectedRoute from "./components/ProtectedRoute";
import {getUserRole} from "./services/authService";

export default function App() {
    const role = getUserRole();

    return (
        <Routes>
            {/* Public Landing.jsx Page */}
            <Route
                path="/"
                element={
                    !role ? <Landing/> : role === "ADMIN" ? <Navigate to="/dashboard"/> : <Navigate to="/tenant"/>
                }
            />

            <Route path="/login" element={<Login/>}/>

            {/* Admin Routes */}
            <Route element={<ProtectedRoute roles={["ADMIN"]}/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                {/* ...other admin routes */}
            </Route>

            {/* Tenant Routes */}
            <Route element={<ProtectedRoute roles={["TENANT"]}/>}>
                <Route path="/tenant" element={<TenantPortal/>}/>
            </Route>

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/"/>}/>
            {/* Admin Portal */}
            <Route element={<ProtectedRoute roles={["ADMIN"]}/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/properties" element={<Properties/>}/>
                <Route path="/tenants" element={<Tenants/>}/>
                <Route path="/payments" element={<Payments/>}/>
                <Route path="/maintenance" element={<Maintenance/>}/>
                <Route path="/reports" element={<Reports/>}/>
            </Route>

            {/* Tenant Portal */}
            <Route element={<ProtectedRoute roles={["TENANT"]}/>}>
                <Route path="/tenant" element={<TenantPortal/>}/>
            </Route>

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
}
