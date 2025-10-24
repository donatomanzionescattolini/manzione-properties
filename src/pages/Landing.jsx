import {Link} from "react-router-dom";

export default function Landing() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-10 py-6 bg-white shadow">
                <h1 className="text-2xl font-bold text-green-700">🏠 Manzione Properties</h1>
                <div className="space-x-4">
                    <Link
                        to="/login"
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Login
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Manage Your <span className="text-green-600">Properties</span><br/> Smarter & Faster
                    </h2>
                    <p className="text-gray-600 text-lg">
                        The all-in-one rental management system for landlords, tenants, and owners — built to simplify
                        rent collection, maintenance, and reporting.
                    </p>
                    <div className="space-x-4">
                        <Link
                            to="/login"
                            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
                        >
                            Get Started
                        </Link>
                        <a
                            href="#features"
                            className="border border-green-600 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 mt-10 md:mt-0">
                    <img
                        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=60"
                        alt="Property"
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
                        Everything You Need to Run Your Rental Business
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 shadow rounded-lg hover:shadow-md transition">
                            <h4 className="font-semibold text-xl mb-3 text-green-700">💳 Payments</h4>
                            <p className="text-gray-600">Collect rent online securely through Stripe or ACH
                                integrations.</p>
                        </div>

                        <div className="p-6 shadow rounded-lg hover:shadow-md transition">
                            <h4 className="font-semibold text-xl mb-3 text-green-700">🛠 Maintenance</h4>
                            <p className="text-gray-600">Track tenant maintenance requests with photos and real-time
                                updates.</p>
                        </div>

                        <div className="p-6 shadow rounded-lg hover:shadow-md transition">
                            <h4 className="font-semibold text-xl mb-3 text-green-700">📊 Reports</h4>
                            <p className="text-gray-600">Generate and email monthly financial reports for each property
                                owner.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 mt-auto">
                <div className="text-center">
                    <p>&copy; {new Date().getFullYear()} Manzione Properties. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
