import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/footer';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Banner Section */}
      <header className="relative w-full h-96">
        <Image
          src="https://images.unsplash.com/photo-1705903273935-d0681d319cf3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your own image URL
          alt="Metro Management Banner"
          layout="fill" // Make sure the image fills the container
          objectFit="cover" // Ensures the image covers the space
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center text-white text-center w-full h-full">
          <h1 className="text-4xl font-bold">Welcome to the Metro Management System</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="p-8 bg-gray-100">
        {/* Cards for Calculate Fare, Book Tickets, Station Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Calculate Fare */}
          <Card className="bg-white shadow-lg">
            <div className="relative w-full h-64">
              <Image 
                src="https://images.unsplash.com/photo-1718778449026-fc05939d7650?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Calculate Fare" 
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Calculate Fare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">Plan your journey easily by calculating the fare based on your selected stations. With real-time updates, you can always be sure of your ticket price.</p>
            </CardContent>
            <div className="flex justify-center mb-4">
              <Button className="bg-blue-600 hover:bg-blue-700"><Link href="/route-planner">Calculate Fare</Link></Button>
            </div>
          </Card>

          {/* Book Tickets */}
          <Card className="bg-white shadow-lg">
            <div className="relative w-full h-64">
              <Image 
                src="https://plus.unsplash.com/premium_photo-1718674394245-9f270c5fd2b3?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Book Tickets" 
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Book Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">Booking tickets has never been easier. Select your route, choose a seat, and confirm payment – all in a few simple steps.</p>
            </CardContent>
            <div className="flex justify-center mb-4">
              <Button className="bg-green-600 hover:bg-green-700"><Link href="/ticket-booking">Book Now</Link></Button>
            </div>
          </Card>

          {/* Station Info */}
          <Card className="bg-white shadow-lg">
            <div className="relative w-full h-64">
              <Image 
                src="https://images.unsplash.com/photo-1606575220121-0860da41a3f3?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Station Info" 
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Station Info</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">Stay informed with the latest station updates, including amenities, operating hours, and any disruptions or changes to service.</p>
            </CardContent>
            <div className="flex justify-center mb-4">
              <Button className="bg-yellow-600 hover:bg-yellow-700"><Link href="/station-info">View Info</Link></Button>
            </div>
          </Card>
        </div>

        {/* Cards for About, Contact, Feedback */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About */}
          <Card className="bg-white shadow-lg">
            <div className="relative w-full h-64">
              <Image 
                src="https://images.unsplash.com/photo-1543994252-21545a52df2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="About Metro" 
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">Our Metro Management System is designed to offer a seamless travel experience with easy ticketing, fare calculation, and station info updates. We are committed to providing an efficient transportation solution for everyone.</p>
            </CardContent>
            <div className="flex justify-center mb-4">
              <Button className="bg-purple-600 hover:bg-purple-700"><Link href="/about">Learn More</Link></Button>
            </div>
          </Card>

          {/* Contact */}
          <Card className="bg-white shadow-lg">
            <div className="relative w-full h-64">
              <Image 
                src="https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Contact Us" 
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">Have a question or need assistance? Reach out to our support team via email, phone, or social media. We are here to help!</p>
            </CardContent>
            <div className="flex justify-center mb-4">
              <Button className="bg-red-600 hover:bg-red-700"><Link href="/contact">Contact Us</Link></Button>
            </div>
          </Card>

          {/* Feedback */}
          <Card className="bg-white shadow-lg">
            <div className="relative w-full h-64">
              <Image 
                src="https://plus.unsplash.com/premium_photo-1682310144714-cb77b1e6d64a?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Give Feedback" 
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">We value your opinion. Let us know what you think of the Metro Management System and how we can improve our services.</p>
            </CardContent>
            <div className="flex justify-center mb-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700"><Link href="/feedback">Give Feedback</Link></Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
