'use client';
import useCheckAdmin from '@/components/custom components/authButtons/checkadmin';

import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
} from 'firebase/firestore';
import { firestore } from '@/firebase/firebase';
import { Button } from '@/components/ui/button'; // Shadcn Button
import { Table, TableHeader, TableBody, TableRow, TableCell } from '@/components/ui/table'; // Shadcn Table
import { Input } from '@/components/ui/input'; // Shadcn Input

interface Fare {
  id: string;
  fromStation: string;
  toStation: string;
  fareAmount: string;
}

const ManageFares = () => {
  const [fares, setFares] = useState<Fare[]>([]); // Initialize fares state
  const [fareData, setFareData] = useState<Fare>({
    fromStation: '',
    toStation: '',
    fareAmount: '',
    id: '',
  }); // Initialize fareData state for adding/updating fares
  const [stations, setStations] = useState<string[]>([]); // Initialize stations state to hold station names
  const [editFareId, setEditFareId] = useState<string | null>(null); // Track editing fare

  const faresRef = collection(firestore, 'fares');
  const stationsRef = collection(firestore, 'stations'); // Reference for stations

  useCheckAdmin(); // Admin check

  // Fetch stations and fares from Firestore
  useEffect(() => {
    const fetchStationsAndFares = async () => {
      try {
        // Fetch stations
        const stationData = await getDocs(stationsRef);
        const stationNames = stationData.docs.map((doc) => doc.data().stationName).sort();
        setStations(stationNames);

        // Fetch fares
        const fareData = await getDocs(faresRef);
        const faresList = fareData.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Fare[];
        setFares(faresList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStationsAndFares();
  }, []);

  // Handle adding a new fare
  const handleAddFare = async () => {
    if (!fareData.fromStation || !fareData.toStation || !fareData.fareAmount) {
      alert('Please fill all fields');
      return;
    }

    try {
      const newFare = {
        fromStation: fareData.fromStation,
        toStation: fareData.toStation,
        fareAmount: fareData.fareAmount,
      };
      const docRef = await addDoc(faresRef, newFare);
      setFares((prev) => [
        ...prev,
        { id: docRef.id, ...newFare },
      ]);
      setFareData({ fromStation: '', toStation: '', fareAmount: '', id: '' }); // Reset form
    } catch (error) {
      console.error('Error adding fare:', error);
    }
  };

  // Handle editing a fare
  const handleEditFare = (id: string, fare: Fare) => {
    setEditFareId(id);
    setFareData(fare); // Populate form with current fare data
  };

  // Handle saving edited fare
  const handleSaveEdit = async () => {
    if (!editFareId) return;

    try {
      const fareDoc = doc(firestore, 'fares', editFareId);
      await updateDoc(fareDoc, {
        fromStation: fareData.fromStation,
        toStation: fareData.toStation,
        fareAmount: fareData.fareAmount,
      });
      setFares((prev) =>
        prev.map((fare) =>
          fare.id === editFareId ? { ...fare, ...fareData } : fare
        )
      );
      setEditFareId(null);
      setFareData({ fromStation: '', toStation: '', fareAmount: '', id: '' }); // Reset form
    } catch (error) {
      console.error('Error saving fare:', error);
    }
  };

  // Handle deleting a fare
  const handleDeleteFare = async (id: string) => {
    try {
      const fareDoc = doc(firestore, 'fares', id);
      await deleteDoc(fareDoc);
      setFares((prev) => prev.filter((fare) => fare.id !== id));
    } catch (error) {
      console.error('Error deleting fare:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Fares</h1>

      {/* Add/Edit Fare Form */}
      <div className="flex items-center gap-2 mb-4">
        <select
          value={fareData.fromStation}
          onChange={(e) => setFareData({ ...fareData, fromStation: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">Select From Station</option>
          {stations.map((station, index) => (
            <option key={index} value={station}>
              {station}
            </option>
          ))}
        </select>

        <select
          value={fareData.toStation}
          onChange={(e) => setFareData({ ...fareData, toStation: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">Select To Station</option>
          {stations.map((station, index) => (
            <option key={index} value={station}>
              {station}
            </option>
          ))}
        </select>

        <Input
          placeholder="Fare Amount"
          type="number"
          value={fareData.fareAmount}
          onChange={(e) => setFareData({ ...fareData, fareAmount: e.target.value })}
        />
        
        {editFareId ? (
          <Button onClick={handleSaveEdit} className="bg-blue-500">
            Save
          </Button>
        ) : (
          <Button onClick={handleAddFare} className="bg-green-500">
            Add Fare
          </Button>
        )}
      </div>

      {/* Fares Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>From Station</TableCell>
            <TableCell>To Station</TableCell>
            <TableCell>Fare Amount</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fares.map((fare, index) => (
            <TableRow key={fare.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{fare.fromStation}</TableCell>
              <TableCell>{fare.toStation}</TableCell>
              <TableCell>{fare.fareAmount}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEditFare(fare.id, fare)}
                    className="bg-yellow-500"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteFare(fare.id)}
                    className="bg-red-500"
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageFares;
