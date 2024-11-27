import React from "react";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-700 to-green-500 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">About Metro Management System</h1>
          <p className="text-lg mt-2">
            Revolutionizing metro travel with modern solutions and efficient services.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* About Description */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700">Our Mission</h2>
          <p className="text-gray-700 mt-4">
            The Metro Management System is dedicated to enhancing urban travel through innovative
            solutions that simplify ticket booking, schedule tracking, and route planning.
          </p>
        </section>

        {/* Features Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700">Key Features</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>Real-time metro schedules and updates.</li>
            <li>Effortless fare calculation and ticket booking.</li>
            <li>Comprehensive route planning for optimized travel.</li>
            <li>Accessible station information and facilities.</li>
            <li>User-friendly interface for seamless navigation.</li>
          </ul>
        </section>

        {/* Benefits Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700">Why Choose Us?</h2>
          <p className="text-gray-700 mt-4">
            Our system ensures that commuters experience hassle-free travel with minimal waiting
            times and maximum convenience. Whether you're a daily traveler or exploring the city
            for the first time, the Metro Management System is your go-to companion.
          </p>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-green-100 rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold text-green-700">Experience the Future of Metro Travel</h2>
          <p className="text-gray-700 mt-4">
            Join us in revolutionizing the way cities commute. Explore schedules, book tickets, and
            plan your routes—all in one place!
          </p>
          <Link
            href="/"
            className="inline-block mt-6 bg-green-600 text-white py-2 px-6 rounded shadow hover:bg-green-700"
          >
            Go to Home Page
          </Link>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Metro Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
