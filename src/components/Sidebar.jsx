import { Link } from "react-router-dom";
import { getUserRole } from "../services/authService";

export default function Sidebar() {
    const role = getUserRole();

    if (role !== "ADMIN") return null;

    const links = [
        { to: "/dashboard", label: "Dashboard" },
        { to: "/properties", label: "Properties" },
        { to: "/tenants", label: "Tenants" },
        { to: "/payments", label: "Payments" },
        { to: "/maintenance", label: "Maintenance" },
        { to: "/reports", label: "Reports" },
    ];

    return (
        <aside className="w-56 bg-gray-800 text-white h-screen p-4">
            <ul className="space-y-3">
                {links.map((l) => (
                    <li key={l.to}>
                        <Link to={l.to} className="block py-2 hover:text-accent">
                            {l.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
