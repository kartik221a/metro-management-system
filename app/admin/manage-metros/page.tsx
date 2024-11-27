'use client';

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
import { Button } from '@/components/ui/button'; // Adjust paths for Shadcn components
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';

import useCheckAdmin from '@/components/custom components/authButtons/checkadmin';

interface Metro {
  id: string; // Firestore document ID
  metroName: string; // Metro name field
}

const ManageMetros = () => {
  const [metros, setMetros] = useState<Metro[]>([]); // Array of metros
  const [metroName, setMetroName] = useState<string>(''); // Input value for metro name
  const [editMetroId, setEditMetroId] = useState<string | null>(null); // Metro ID being edited

  const metrosRef = collection(firestore, 'metros');

  
  // Fetch all metros from Firestore
  useEffect(() => {
    const fetchMetros = async () => {
      try {
        const data = await getDocs(metrosRef);
        const metrosData = data.docs.map((doc) => ({
          id: doc.id, // Document ID
          ...doc.data(), // Document fields
        })) as Metro[];
        setMetros(metrosData);
    } catch (error) {
        console.error('Error fetching metros:', error);
    }
};

fetchMetros();
  }, []);

    useCheckAdmin()
  // Add a new metro to Firestore
  const handleAddMetro = async () => {
    if (!metroName.trim()) {
      alert('Metro name cannot be empty.');
      return;
    }

    try {
      await addDoc(metrosRef, { metroName });
      setMetroName(''); // Clear input field
      window.location.reload(); // Refresh the list (optional)
    } catch (error) {
      console.error('Error adding metro:', error);
    }
  };

  // Edit an existing metro
  const handleEditMetro = (id: string, name: string) => {
    setEditMetroId(id);
    setMetroName(name); // Populate input field with the current metro name
  };

  // Save edited metro to Firestore
  const handleSaveEdit = async () => {
    if (!editMetroId) return;

    try {
      const metroDoc = doc(firestore, 'metros', editMetroId);
      await updateDoc(metroDoc, { metroName });
      setEditMetroId(null); // Clear editing state
      setMetroName(''); // Clear input field
      window.location.reload(); // Refresh the list (optional)
    } catch (error) {
      console.error('Error saving metro:', error);
    }
  };

  // Delete a metro from Firestore
  const handleDeleteMetro = async (id: string) => {
    try {
      const metroDoc = doc(firestore, 'metros', id);
      await deleteDoc(metroDoc);
      window.location.reload(); // Refresh the list (optional)
    } catch (error) {
      console.error('Error deleting metro:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Manage Metros</h1>

      <Card className="p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Input
            type="text"
            placeholder="Metro Name"
            value={metroName}
            onChange={(e) => setMetroName(e.target.value)}
            className="flex-grow"
          />
          {editMetroId ? (
            <Button onClick={handleSaveEdit} className="bg-blue-500">
              Save
            </Button>
          ) : (
            <Button onClick={handleAddMetro} className="bg-green-500">
              Add
            </Button>
          )}
        </div>
      </Card>

      <Card className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Metro Name</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {metros.map((metro, index) => (
              <TableRow key={metro.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{metro.metroName}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditMetro(metro.id, metro.metroName)}
                      className="bg-yellow-500 text-white"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteMetro(metro.id)}
                      className="bg-red-500 text-white"
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ManageMetros;
