'use client'
import React, { useState, useEffect } from 'react'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { firestore } from '@/firebase/firebase'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button' // Correct import for ShadCN Button
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'; // Correct import for ShadCN Table components

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  gender: string // Added gender field
}

const ManageUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  // Fetch users data from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userCollection = collection(firestore, 'users')
        const userSnapshot = await getDocs(userCollection)
        const userList = userSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as User[]
        setUsers(userList)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
      setLoading(false)
    }

    fetchUsers()
  }, [])

  // Handle deleting a user
  const handleDeleteUser = async (id: string) => {
    try {
      const userDoc = doc(firestore, 'users', id)
      await deleteDoc(userDoc)
      setUsers(users.filter(user => user.id !== id)) // Remove deleted user from list
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Manage Users</h1>

      {/* Table to display registered users */}
      <Table>
  <TableHeader>
    <TableRow>
      <TableCell>First Name</TableCell>
      <TableCell>Last Name</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>Gender</TableCell>
      <TableCell>Actions</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    {!loading ? (
      users.map(user => (
        <TableRow key={user.id}>
          <TableCell>{user.firstName}</TableCell>
          <TableCell>{user.lastName}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.gender}</TableCell>
          <TableCell>
            <Button
              variant="destructive"
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))
    ) : (
      <TableRow>
        <TableCell colSpan={5}>Loading...</TableCell>
      </TableRow>
    )}
  </TableBody>
</Table>

    </div>
  )
}

export default ManageUsers
