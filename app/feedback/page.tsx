import React from "react";

const FeedbackPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-purple-700 to-purple-500 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">We Value Your Feedback</h1>
          <p className="text-lg mt-2">
            Help us improve by sharing your thoughts and experiences.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Feedback Form Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-purple-700">Your Feedback Matters</h2>
          <p className="text-gray-700 mt-4">
            Please fill out the form below to let us know how we can improve our services.
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="feedbackType"
                className="block text-gray-700 font-medium mb-1"
              >
                Type of Feedback
              </label>
              <select
                id="feedbackType"
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="">Select an option</option>
                <option value="complaint">Complaint</option>
                <option value="suggestion">Suggestion</option>
                <option value="praise">Praise</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Feedback
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-lg p-2"
                rows={4}
                placeholder="Write your feedback here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-6 rounded shadow hover:bg-purple-700"
            >
              Submit Feedback
            </button>
          </form>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Metro Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default FeedbackPage;
