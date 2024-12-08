import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/footer';

const StationInfoPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Banner Section */}
      <header className="relative w-full h-96">
        <Image
          src="https://plus.unsplash.com/premium_photo-1676745449942-9810b9f9e5b9?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Unsplash image for station banner
          alt="Station Info Banner"
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center text-white text-center w-full h-full">
          <h1 className="text-4xl font-bold">Station Information</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="p-8 bg-gray-100">
        {/* Station Info Card */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center">Comprehensive Station Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <section>
                <h2 className="text-lg font-medium text-gray-800">General Station Overview</h2>
                <p>
                  Stations serve as essential hubs in the transportation network, providing access to various modes of 
                  transit, such as trains, buses, subways, and sometimes even airports. They are designed to handle high 
                  volumes of passengers daily while ensuring efficient travel. Stations vary greatly in size, location, 
                  and facilities, ranging from small suburban stations to large metropolitan transportation centers.
                </p>
              </section>
              
              <section>
                <h2 className="text-lg font-medium text-gray-800">Types of Stations</h2>
                <p>
                  Stations are categorized based on their function and location. Some common types include:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Central Stations</strong>: Typically the largest, handling intercity and regional connections.</li>
                  <li><strong>Suburban Stations</strong>: Smaller stations primarily serving local commuters.</li>
                  <li><strong>Interchange Stations</strong>: Stations where different modes of transportation meet (e.g., trains and buses).</li>
                  <li><strong>Terminus Stations</strong>: Stations where a transport line or route ends.</li>
                  <li><strong>Airport Stations</strong>: Located within or near airports, facilitating travel to and from the airport.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-medium text-gray-800">Station Operating Hours</h2>
                <p>
                  Most stations operate 24/7 to accommodate passengers at all times of day and night, though the services may
                  vary depending on the station’s size, location, and type. Major stations have round-the-clock operations, while 
                  smaller ones may close overnight or on weekends. Always check the station's schedule for specific service hours.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-medium text-gray-800">Common Station Facilities</h2>
                <p>Facilities in stations vary based on their size and usage, but some of the most common amenities include:</p>
                <ul className="list-disc pl-6">
                  <li>Waiting areas with seating and restrooms</li>
                  <li>Shops, restaurants, and cafes</li>
                  <li>Information boards displaying train or bus schedules</li>
                  <li>Ticket counters and self-service kiosks</li>
                  <li>Free Wi-Fi and charging stations</li>
                  <li>Accessibility services, including elevators and ramps for disabled passengers</li>
                  <li>Lost and found, security services, and customer support desks</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-medium text-gray-800">How to Navigate a Station</h2>
                <p>
                  Navigating large stations can be challenging, but most stations are designed with clear signage to guide passengers.
                  Here are some tips to navigate:
                </p>
                <ul className="list-disc pl-6">
                  <li>Look for directional signs and maps placed throughout the station.</li>
                  <li>Stations may have different zones for different modes of transport (e.g., trains, buses, subways), so make sure you are in the right zone.</li>
                  <li>Check the display boards regularly for updates on schedules and platform changes.</li>
                  <li>If in doubt, visit the information desk for help.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-medium text-gray-800">Safety and Security</h2>
                <p>
                  Safety and security are top priorities at all stations. Here are some general safety tips for station-goers:
                </p>
                <ul className="list-disc pl-6">
                  <li>Always stay alert and be aware of your surroundings.</li>
                  <li>Keep an eye on your belongings to avoid theft.</li>
                  <li>Follow all safety instructions, especially in train platforms or bus areas.</li>
                  <li>If you see any suspicious behavior, report it to station staff immediately.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-medium text-gray-800">Nearby Landmarks & Transportation</h2>
                <p>
                  Many stations are strategically located near popular landmarks or offer convenient access to other transportation options:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Centrally Located Stations:</strong> Usually have easy access to shopping districts, business hubs, and entertainment areas.</li>
                  <li><strong>Interchange Stations:</strong> Typically offer quick access to other public transportation, such as metro, buses, or taxis.</li>
                  <li><strong>Airport Stations:</strong> Provide easy transfer to nearby hotels, parking lots, and car rental services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-medium text-gray-800">Contact and Customer Service</h2>
                <p>If you need assistance, most stations offer customer service desks, either in person or by phone. Here are some common ways to contact station management:</p>
                <p>
                  <strong>Phone:</strong> +91 6397729073 <br />
                  <strong>Email:</strong> kartik.2426mca664@kiet.edu <br />
                  <strong>Address:</strong> Multiple locations across the city
                </p>
              </section>

              
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default StationInfoPage;
