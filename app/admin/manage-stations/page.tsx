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

interface Station {
  id: string;
  stationName: string;
}

const ManageStations = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [stationName, setStationName] = useState<string>('');
  const [editStationId, setEditStationId] = useState<string | null>(null);

  const stationsRef = collection(firestore, 'stations');

  useCheckAdmin()

  // Fetch stations from Firestore
  useEffect(() => {
    const fetchStations = async () => {
      try {
        const data = await getDocs(stationsRef);
        const stationsData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Station[];
        // Sort alphabetically or by a specific condition
        const sortedStations = stationsData.sort((a, b) =>
          a.stationName.localeCompare(b.stationName)
        );
        setStations(sortedStations);
      } catch (error) {
        console.error('Error fetching stations:', error);
      }
    };

    fetchStations();
  }, []);

  // Add a new station
  const handleAddStation = async () => {
    if (!stationName.trim()) {
      alert('Station name cannot be empty.');
      return;
    }

    try {
      const newStation = { stationName };
      const docRef = await addDoc(stationsRef, newStation);
      setStations((prev) => [
        ...prev,
        { id: docRef.id, stationName: newStation.stationName },
      ]);
      setStationName('');
    } catch (error) {
      console.error('Error adding station:', error);
    }
  };

  // Edit station
  const handleEditStation = (id: string, name: string) => {
    setEditStationId(id);
    setStationName(name);
  };

  // Save edited station
  const handleSaveEdit = async () => {
    if (!editStationId) return;

    try {
      const stationDoc = doc(firestore, 'stations', editStationId);
      await updateDoc(stationDoc, { stationName });
      setStations((prev) =>
        prev.map((station) =>
          station.id === editStationId
            ? { ...station, stationName }
            : station
        )
      );
      setEditStationId(null);
      setStationName('');
    } catch (error) {
      console.error('Error saving station:', error);
    }
  };

  // Delete station
  const handleDeleteStation = async (id: string) => {
    try {
      const stationDoc = doc(firestore, 'stations', id);
      await deleteDoc(stationDoc);
      setStations((prev) => prev.filter((station) => station.id !== id));
    } catch (error) {
      console.error('Error deleting station:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Stations</h1>

      {/* Add/Edit Station Form */}
      <div className="flex items-center gap-2 mb-4">
        <Input
          placeholder="Station Name"
          value={stationName}
          onChange={(e) => setStationName(e.target.value)}
        />
        {editStationId ? (
          <Button onClick={handleSaveEdit} className="bg-blue-500">
            Save
          </Button>
        ) : (
          <Button onClick={handleAddStation} className="bg-green-500">
            Add
          </Button>
        )}
      </div>

      {/* Stations Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Station Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stations.map((station, index) => (
            <TableRow key={station.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{station.stationName}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    onClick={() =>
                      handleEditStation(station.id, station.stationName)
                    }
                    className="bg-yellow-500"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteStation(station.id)}
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

export default ManageStations;
