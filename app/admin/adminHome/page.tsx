'use client'
import Link from "next/link";

const AdminHome = () => {
    return (
        <div className="p-6">
            {/* Banner */}
            <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg p-8 mb-8 text-white shadow-lg">
                <h1 className="text-3xl font-bold mb-2">Welcome, Admin!</h1>
                <p className="text-lg">Manage your metro system efficiently with the tools below.</p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card for Manage Stations */}
                <div className="bg-card shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                    <h2 className="text-xl font-semibold mb-4">Manage Stations</h2>
                    <p className="text-muted-foreground mb-4">
                        Add, edit, or delete metro stations easily to keep the system updated.
                    </p>
                    <Link
                        href="/admin/manage-stations"
                        className="text-blue-500 hover:underline"
                    >
                        Go to Manage Stations →
                    </Link>
                </div>

                {/* Card for Manage Fares */}
                <div className="bg-card shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                    <h2 className="text-xl font-semibold mb-4">Manage Fares</h2>
                    <p className="text-muted-foreground mb-4">
                        Update fare details to ensure accurate pricing for passengers.
                    </p>
                    <Link
                        href="/admin/manage-fares"
                        className="text-blue-500 hover:underline"
                    >
                        Go to Manage Fares →
                    </Link>
                </div>

                {/* Card for Manage Users */}
                <div className="bg-card shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                    <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
                    <p className="text-muted-foreground mb-4">
                        Oversee user accounts and their permissions effectively.
                    </p>
                    <Link
                        href="/admin/manage-users"
                        className="text-blue-500 hover:underline"
                    >
                        Go to Manage Users →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
