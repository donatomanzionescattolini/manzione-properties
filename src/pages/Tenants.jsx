import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {fetchTenants} from "../store/tenantSlice";

export default function Tenants() {
    const dispatch = useDispatch();
    const {list, loading} = useSelector((state) => state.tenant);

    useEffect(() => {
        dispatch(fetchTenants());
    }, [dispatch]);

    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex-1">
                <Navbar/>
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Tenants</h2>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <table className="w-full border">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Property</th>
                                <th className="p-2">Rent</th>
                            </tr>
                            </thead>
                            <tbody>
                            {list?.map((t) => (
                                <tr key={t.id} className="border-t">
                                    <td className="p-2">{t.name}</td>
                                    <td className="p-2">{t.email}</td>
                                    <td className="p-2">{t.property?.name}</td>
                                    <td className="p-2">${t.property?.rentAmount}</td>
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
