import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg mt-2">We are here to assist you with any queries or concerns.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Contact Info Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700">Get in Touch</h2>
          <p className="text-gray-700 mt-4">
            For any inquiries, feel free to reach out to us. We're committed to ensuring your
            metro experience is seamless and enjoyable.
          </p>
          <ul className="mt-4 text-gray-700 space-y-2">
            <li>
              <strong>Email:</strong> kartik.2426mca664@kiet.edu
            </li>
            <li>
              <strong>Phone:</strong> +91 6397729073
            </li>
            <li>
              <strong>Address:</strong> 123 Metro Lane, NCR, India
            </li>
          </ul>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700">Send Us a Message</h2>
          <p className="text-gray-700 mt-4">
            Fill out the form below, and our team will get back to you as soon as possible.
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
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-lg p-2"
                rows={4}
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded shadow hover:bg-blue-700"
            >
              Send Message
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

export default ContactPage;
