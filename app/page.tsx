import React from "react";

const MetroHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Metro Management System</h1>
          <p className="text-lg mt-2">
            Your gateway to seamless metro travel. Explore schedules, book tickets, and more!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Row 1: View Schedule, Calculate Fare, Book Tickets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* View Schedule */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold text-blue-700">View Schedule</h2>
            <p className="text-gray-600 mt-2">
              Check metro schedules to plan your journey efficiently.
            </p>
            <a
              href="/schedule"
              className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
            >
              View Schedule
            </a>
          </div>

          {/* Calculate Fare */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold text-green-700">Calculate Fare</h2>
            <p className="text-gray-600 mt-2">
              Find out the cost of your journey with our fare calculator.
            </p>
            <a
              href="/fare"
              className="inline-block mt-4 bg-green-600 text-white py-2 px-4 rounded shadow hover:bg-green-700"
            >
              Calculate Fare
            </a>
          </div>

          {/* Book Tickets */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold text-yellow-700">Book Tickets</h2>
            <p className="text-gray-600 mt-2">
              Secure your metro tickets quickly and conveniently.
            </p>
            <a
              href="/booking"
              className="inline-block mt-4 bg-yellow-600 text-white py-2 px-4 rounded shadow hover:bg-yellow-700"
            >
              Book Tickets
            </a>
          </div>
        </div>

        {/* Row 2: About Card */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-purple-700">About Metro Management System</h2>
            <p className="text-gray-600 mt-4">
              Learn about how our system simplifies metro travel with innovative tools and features.
            </p>
            <a
              href="/about"
              className="inline-block mt-6 bg-purple-600 text-white py-2 px-4 rounded shadow hover:bg-purple-700"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Row 3: Contact Card */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-pink-700">Contact Us</h2>
            <p className="text-gray-600 mt-4">
              Have questions or need help? Reach out to our team for support.
            </p>
            <a
              href="/contact"
              className="inline-block mt-6 bg-pink-600 text-white py-2 px-4 rounded shadow hover:bg-pink-700"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Row 4: Feedback Card */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-indigo-700">Feedback</h2>
            <p className="text-gray-600 mt-4">
              Help us improve by sharing your feedback and suggestions.
            </p>
            <a
              href="/feedback"
              className="inline-block mt-6 bg-indigo-600 text-white py-2 px-4 rounded shadow hover:bg-indigo-700"
            >
              Give Feedback
            </a>
          </div>
        </div>

        {/* Row 5: Route Planner Card */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-teal-700">Route Planner</h2>
            <p className="text-gray-600 mt-4">
              Plan the best routes for your metro journey with ease.
            </p>
            <a
              href="/route-planner"
              className="inline-block mt-6 bg-teal-600 text-white py-2 px-4 rounded shadow hover:bg-teal-700"
            >
              Plan Routes
            </a>
          </div>
        </div>

        {/* Row 6: Station Info Card */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-orange-700">Station Info</h2>
            <p className="text-gray-600 mt-4">
              Explore details about metro stations near you.
            </p>
            <a
              href="/station-info"
              className="inline-block mt-6 bg-orange-600 text-white py-2 px-4 rounded shadow hover:bg-orange-700"
            >
              Station Info
            </a>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Metro Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MetroHomePage;
