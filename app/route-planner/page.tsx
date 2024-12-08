'use client';

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore as db } from '@/firebase/firebase';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Fare {
  fromStation: string;
  toStation: string;
  fareAmount: string;
}

const RoutePlannerPage = () => {
  const [stations, setStations] = useState<string[]>([]); // All station names
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [fare, setFare] = useState<string | null>(null); // Fare to display
  const [fares, setFares] = useState<Fare[]>([]); // All fares
  const [loading, setLoading] = useState(true);

  // Fetch fares and stations
  useEffect(() => {
    const fetchFaresAndStations = async () => {
      try {
        const fareSnapshot = await getDocs(collection(db, 'fares'));
        const stationSnapshot = await getDocs(collection(db, 'stations'));

        // Map fares and stations
        const fareData = fareSnapshot.docs.map((doc) => doc.data() as Fare);
        const stationNames = stationSnapshot.docs.map((doc) => doc.data().stationName).sort();

        setStations(stationNames); // Set all stations
        setFares(fareData);
      } catch (error) {
        console.error('Error fetching fares or stations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaresAndStations();
  }, []);

  const handleRoutePlan = () => {
    if (!startStation || !endStation) {
      alert('Please select both start and end stations!');
      return;
    }

    // Find the fare for the selected route
    const selectedFare = fares.find(
      (fare) => fare.fromStation === startStation && fare.toStation === endStation
    );

    if (selectedFare) {
      setFare(selectedFare.fareAmount);
    } else {
      setFare('No fare available for this route');
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Replace with a custom loading component
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Route Planner</CardTitle>
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
          </div>
          {fare !== null && (
            <div className="mt-4 text-center">
              <p className="text-lg font-bold">
                Fare: {fare === 'No fare available for this route' ? fare : `₹${fare}`}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-500">
            Choose your start and end stations to view the fare.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RoutePlannerPage;
