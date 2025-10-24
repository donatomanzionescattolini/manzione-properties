import axios from "axios";

const API = "http://localhost:8080/api/auth";

export function logout() {
    localStorage.removeItem("token");
}

export function getToken() {
    return localStorage.getItem("token");
}



export async function login(email, password) {
    const res = await axios.post(`${API}/login`, { email, password });
    if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
    }
    return res.data;
}

export function getUserRole() {
    return localStorage.getItem("role");
}