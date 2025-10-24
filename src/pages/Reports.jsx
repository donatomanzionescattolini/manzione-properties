import React, {useEffect, useState} from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Reports() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        api.get("/reports")
            .then((res) => setReports(res.data))
            .catch((err) => console.error("Failed to fetch reports:", err));
    }, []);

    const downloadPDF = async (id) => {
        try {
            const res = await api.get(`/reports/pdf/${id}`, {responseType: "blob"});
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const a = document.createElement("a");
            a.href = url;
            a.download = `report-${id}.pdf`;
            a.click();
        } catch (err) {
            alert("Failed to download PDF");
        }
    };
    const sendEmail = async (id) => {
        const email = prompt("Enter owner's email:");
        if (!email) return;
        try {
            await api.post(`/email/send/${id}?email=${encodeURIComponent(email)}`);
            alert("Report emailed successfully!");
        } catch (err) {
            alert("Failed to send email");
        }
    };

    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex-1">
                <Navbar/>
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Monthly Reports</h2>
                    <table className="w-full border">
                        <thead>
                        <tr className="bg-gray-200">
                            <th>ID</th>
                            <th>Property</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {reports.map((r) => (
                            <tr key={r.id} className="border-t">
                                <td>{r.id}</td>
                                <td>{r.propertyId}</td>
                                <td>{r.month}</td>
                                <td>{r.year}</td>
                                <td>
                                    <button
                                        onClick={() => downloadPDF(r.id)}
                                        className="bg-accent text-white px-3 py-1 rounded hover:bg-green-500"
                                    >
                                        Download PDF
                                    </button>
                                    <button
                                        onClick={() => sendEmail(r.id)}
                                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 ml-2"
                                    >
                                        Send Email
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
