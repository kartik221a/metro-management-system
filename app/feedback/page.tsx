import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/footer';

const FeedbackPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Banner Section */}
      <header className="relative w-full h-96">
        <Image
          src="https://plus.unsplash.com/premium_photo-1667354154657-5adc088ed55a?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your own image URL
          alt="Feedback Banner"
          layout="fill" // Make sure the image fills the container
          objectFit="cover" // Ensures the image covers the space
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center text-white text-center w-full h-full">
          <h1 className="text-4xl font-bold">Feedback</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="p-8 bg-gray-100">
        {/* Feedback Form Card */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center">We Value Your Feedback</CardTitle>
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
                <label htmlFor="rating" className="text-gray-700">Rating</label>
                <select
                  id="rating"
                  name="rating"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Good</option>
                  <option value="3">3 - Average</option>
                  <option value="2">2 - Poor</option>
                  <option value="1">1 - Very Poor</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-700">Your Feedback</label>
                <textarea
                  id="message"
                  name="message"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your feedback"
                ></textarea>
              </div>
              <div className="flex justify-center mt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  Submit Feedback
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default FeedbackPage;
