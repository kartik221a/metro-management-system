'use client';

import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore';
import { firestore as db } from '@/firebase/firebase';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Loading from '@/components/custom components/loading';

// Static QR Code image URL (you can replace this with a dynamic one later)

const qrCodeImageUrl = '/media/images/qrcode_www.rrts.co.in.png';



const TicketBookingPage = () => {
  const [stations, setStations] = useState<string[]>([]);
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [fare, setFare] = useState<string | null>(null);
  const [fares, setFares] = useState<any[]>([]);
  const [bookedTickets, setBookedTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch stations and fares
  useEffect(() => {
    const fetchFaresAndStations = async () => {
      try {
        const fareSnapshot = await getDocs(collection(db, 'fares'));
        const stationSnapshot = await getDocs(collection(db, 'stations'));

        const fareData = fareSnapshot.docs.map((doc) => doc.data());
        const stationNames = stationSnapshot.docs.map((doc) => doc.data().stationName).sort();

        setStations(stationNames);
        setFares(fareData);
      } catch (error) {
        console.error('Error fetching fares or stations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaresAndStations();
  }, []);

  // Handle route planning and fare calculation
  const handleRoutePlan = () => {
    if (!startStation || !endStation) {
      alert('Please select both start and end stations!');
      return;
    }

    const selectedFare = fares.find(
      (fare) => fare.fromStation === startStation && fare.toStation === endStation
    );

    if (selectedFare) {
      setFare(selectedFare.fareAmount);
    } else {
      setFare('No fare available for this route');
    }
  };

  // Handle ticket booking
  const handleBookTicket = async () => {
    if (!startStation || !endStation || fare === null) {
      alert('Please select a valid route to book a ticket!');
      return;
    }

    // Booking the ticket and saving it to Firebase
    const newTicket = {
      startStation,
      endStation,
      fare,
      date: new Date().toLocaleDateString(),
      qrCode: qrCodeImageUrl, // Static QR code
    };

    // Save to Firebase (using addDoc or setDoc depending on the structure)
    await addDoc(collection(db, 'bookedTickets'), newTicket);

    // Add to local state for immediate display
    setBookedTickets([newTicket, ...bookedTickets]);
    alert('Ticket booked successfully!');
  };

  // Fetch previously booked tickets
  useEffect(() => {
    const fetchBookedTickets = async () => {
      try {
        const ticketSnapshot = await getDocs(collection(db, 'bookedTickets'));
        const ticketData = ticketSnapshot.docs.map((doc) => doc.data());
        setBookedTickets(ticketData);
      } catch (error) {
        console.error('Error fetching booked tickets:', error);
      }
    };

    fetchBookedTickets();
  }, []);

  if (loading) {
    return <Loading/>
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      {/* Route selection card */}
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Ticket Booking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <select
              value={startStation}
              onChange={(e) => setStartStation(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Start Station</option>
              {stations.map((station, index) => (
                <option key={index} value={station}>
                  {station}
                </option>
              ))}
            </select>
            <select
              value={endStation}
              onChange={(e) => setEndStation(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select End Station</option>
              {stations.map((station, index) => (
                <option key={index} value={station}>
                  {station}
                </option>
              ))}
            </select>
            <Button
              onClick={handleRoutePlan}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Plan Route
            </Button>
            {fare && (
              <div className="mt-4 text-center">
                <p className="text-lg font-bold">Fare: {fare}</p>
              </div>
            )}
            {fare && (
              <Button
                onClick={handleBookTicket}
                className="w-full mt-4 bg-green-600 hover:bg-green-700"
              >
                Book Ticket
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Show previously booked tickets */}
      <div className="mt-6 w-full max-w-md">
        <h3 className="text-xl font-semibold">Previous Bookings</h3>
        {bookedTickets.length > 0 ? (
          <div className="space-y-4 mt-4">
            {bookedTickets.map((ticket, index) => (
              <Card key={index} className="bg-white shadow-md p-4">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Ticket #{index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>From:</strong> {ticket.startStation}</p>
                  <p><strong>To:</strong> {ticket.endStation}</p>
                  <p><strong>Fare:</strong> {ticket.fare}</p>
                  <p><strong>Date:</strong> {ticket.date}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-center">
                    <img src={qrCodeImageUrl} alt="QR Code" className="w-24 h-24" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p>No previous bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default TicketBookingPage;
