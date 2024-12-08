import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/footer';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Banner Section */}
      <header className="relative w-full h-96">
        <Image
          src="https://images.unsplash.com/photo-1676568319119-f6b8f27eb271?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your own image URL
          alt="About Metro Management"
          layout="fill" // Make sure the image fills the container
          objectFit="cover" // Ensures the image covers the space
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center text-white text-center w-full h-full">
          <h1 className="text-4xl font-bold">About the Metro Management System</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="p-8 bg-gray-100">
        {/* Company Info Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-lg">
            <div className="relative w-full h-64">
              <Image 
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Company Overview" 
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Our Company</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">We are dedicated to transforming the public transportation experience with cutting-edge technology, offering efficient and user-friendly solutions for fare calculations, ticket booking, and real-time station updates.</p>
            </CardContent>
          </Card>

          {/* Mission and Vision Card */}
          <Card className="bg-white shadow-lg">
            <div className="relative w-full h-64">
              <Image 
                src="https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Mission and Vision" 
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Mission & Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">Our mission is to make metro travel convenient, affordable, and accessible for everyone. We strive to innovate continuously, improving the efficiency and reliability of our services while expanding our network to cover more areas.</p>
            </CardContent>
          </Card>
        </div>

        {/* Our Services Card */}
        <div className="mt-8">
          <Card className="bg-white shadow-lg">
            <div className="relative w-full h-64">
              <Image 
                src="https://plus.unsplash.com/premium_photo-1672984138064-64f4ed05a7ad?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Services" 
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Our Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">We offer a range of services to ensure smooth, hassle-free travel experiences, including fare calculation, real-time updates, station info, and easy ticket booking. All designed to make your commute efficient and pleasant.</p>
            </CardContent>
            
          </Card>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
