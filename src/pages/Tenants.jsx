import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import userSlice from "../store/userSlice";
import store from "../store/store";
import {fetchProperties} from "../store/propertySlice";

import React from "react";
export default function  Tenants() {
    const dispatch = useDispatch();
    const { list, loading } = useSelector((state) => state.property);

    useEffect(() => {

    }, [dispatch]);

    return (
        <div className="flex">
            <div className="flex-1">
                <Navbar />
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Tenants</h2>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <table className="w-full border">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2">Name</th>
                                <th className="p-2">Address</th>
                                <th className="p-2">Rent</th>
                                <th className="p-2">Due Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {list.map((p) => (
                                <tr key={p.id} className="border-t">
                                    <td className="p-2">{p.name}</td>
                                    <td className="p-2">{p.address}</td>
                                    <td className="p-2">${p.rentAmount}</td>
                                    <td className="p-2">{p.rentDueDate}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
