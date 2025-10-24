import {useNavigate} from "react-router-dom";
import {getUserRole, logout} from "../services/authService";

export default function Navbar() {
    const navigate = useNavigate();
    const role = getUserRole();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="bg-primary text-white flex justify-between items-center p-4">
            <h1 className="font-bold text-lg">
                🏠 Manzione Properties {role === "ADMIN" ? "Admin" : "Tenant"} Portal
            </h1>
            <button
                onClick={handleLogout}
                className="bg-accent px-3 py-1 rounded hover:bg-green-500"
            >
                Logout
            </button>
        </nav>
    );
}
