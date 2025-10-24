import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import React from "react";
export default function Dashboard() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        api.get("/reports").then((res) => {
            const transformed = res.data.map((r) => ({
                name: `${r.month}/${r.year}`,
                income: r.totalIncome,
                expense: r.totalExpense,
            }));
            setChartData(transformed);
        });
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-6">Financial Overview</h2>
                    <div className="bg-white p-4 rounded shadow">
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={chartData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="income" fill="#10B981" name="Income" />
                                <Bar dataKey="expense" fill="#EF4444" name="Expenses" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
