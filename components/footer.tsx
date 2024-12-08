import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Logo Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">METRO MANAGEMENT SYSTEM</h2>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
              <li><Link href="/feedback" className="hover:text-gray-400">Feedback</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul>
              <li><Link href="/route-planner" className="hover:text-gray-400">Calculate Fare</Link></li>
              <li><Link href="/ticket-booking" className="hover:text-gray-400">Book Tickets</Link></li>
              <li><Link href="/station-info" className="hover:text-gray-400">Station Info</Link></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul>
              <li><Link href="/faqs" className="hover:text-gray-400">FAQs</Link></li>
              <li><Link href="/help-center" className="hover:text-gray-400">Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-gray-400">Terms & Conditions</Link></li>
            </ul>
          </div> */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul>
              <li><Link href="kartik.2426mca664@kiet.edu" className="hover:text-gray-400">kartik.2426mca664@kiet.edu</Link></li>
              <li><Link href="tel:+91 6397729073" className="hover:text-gray-400">+91 6397729073</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Metro Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
