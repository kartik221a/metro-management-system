import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/footer';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Banner Section */}
      <header className="relative w-full h-96">
        <Image
          src="https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your own image URL
          alt="Contact Us Banner"
          layout="fill" // Make sure the image fills the container
          objectFit="cover" // Ensures the image covers the space
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center text-white text-center w-full h-full">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="p-8 bg-gray-100">
        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Form Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="flex justify-center mt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-600">📍</span>
                  <p className="ml-2 text-gray-700">123 Metro City, U.P., India</p>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600">📧</span>
                  <p className="ml-2 text-gray-700">kartik.2426mca664@kiet.edu</p>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600">📞</span>
                  <p className="ml-2 text-gray-700">+91 6397729073</p>
                </div>
                <div className="flex justify-center mt-4">
                  <Button className="bg-green-600 hover:bg-green-700 w-full">
                    <Link href="/feedback">Give Feedback</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
