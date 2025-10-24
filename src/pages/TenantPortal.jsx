import Navbar from "../components/Navbar";
import {createStripeSession} from "../services/stripeService";

import React from "react";

export default function TenantPortal() {
    const handlePayRent = async () => {
        try {
            await createStripeSession(1500); // Example rent amount
        } catch (err) {
            alert("Payment failed. Please try again.");
        }
    };

    return (
        <div>
            <Navbar/>
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Tenant Portal</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-4 bg-white rounded shadow">
                        <h3 className="font-semibold mb-2">💳 Pay Rent</h3>
                        <button
                            onClick={handlePayRent}
                            className="bg-accent text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Pay with Stripe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
