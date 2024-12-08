'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);

    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

    // Public navigation links (unauthenticated users)
    const publicNavLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Feedback", path: "/feedback" },
    ];

    // User navigation links (authenticated users)
    const userNavLinks = [
        { name: "Route Planner", path: "/route-planner" },
        { name: "Station Info", path: "/station-info" },
        { name: "Ticket Booking", path: "/ticket-booking" },
    ];

    // Admin navigation links
    const adminNavLinks = [
        { name: "Admin Home", path: "/admin/adminHome" },
        { name: "Manage Stations", path: "/admin/manage-stations" },
        { name: "Manage Fares", path: "/admin/manage-fares" },
        { name: "Manage Users", path: "/admin/manage-users" },
        
    ];

    const navLinks = userEmail
        ? isAdmin
            ? adminNavLinks
            : [...publicNavLinks, ...userNavLinks]
        : publicNavLinks;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email);
                setIsAdmin(user.email === adminEmail);
            } else {
                setUserEmail(null);
                setIsAdmin(false);
            }
        });

        return () => unsubscribe();
    }, [adminEmail]);

    return (
        <nav className="m-1 rounded-lg bg-background/25 sticky top-0 backdrop-blur z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/">
                            <span className="text-xl font-bold tracking-wide cursor-pointer">
                                Metro Management System
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`${pathname === link.path
                                        ? "font-bold border-b-2 border-customGray"
                                        : "hover:text-customGray"
                                    } transition`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Account SVG */}
                        <Link href="/account">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out cursor-pointer"
  >
    <path
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z"
    />
  </svg>
</Link>



                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="hover:text-customGray focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-2 py-3 px-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`${pathname === link.path
                                            ? "font-bold border-b-2 border-customGray"
                                            : "hover:text-customGray"
                                        } block transition`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {/* Account SVG */}
                            <Link href="/account">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out cursor-pointer"
  >
    <path
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z"
    />
  </svg>
</Link>


                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
