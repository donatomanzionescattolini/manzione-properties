import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import React from "react";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            if (data.role === "ADMIN") navigate("/");
            else if (data.role === "TENANT") navigate("/tenant");
        } catch (err) {
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h1 className="text-2xl font-bold text-center mb-6">🏠 Manzione Properties</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full border rounded px-3 py-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-1 text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full border rounded px-3 py-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
