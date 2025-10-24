import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import React, {useEffect, useState} from "react";
import api from "../services/api";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export default function Dashboard() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        api.get("/reports")
            .then((res) => {
                const transformed = res.data.map((r) => ({
                    name: `${r.month}/${r.year}`,
                    income: r.totalIncome,
                    expense: r.totalExpense,
                }));
                setChartData(transformed);
            })
            .catch((err) => console.error("Failed to fetch dashboard data:", err));
    }, []);

    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex-1">
                <Navbar/>
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-6">Financial Overview</h2>
                    <div className="bg-white p-4 rounded shadow">
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={chartData}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Bar dataKey="income" fill="#10B981" name="Income"/>
                                <Bar dataKey="expense" fill="#EF4444" name="Expenses"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
