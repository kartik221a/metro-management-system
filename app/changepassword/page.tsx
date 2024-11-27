'use client'
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import {
    reauthenticateWithCredential,
    updatePassword
} from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { EmailAuthProvider } from 'firebase/auth/web-extension'

const PasswordChangePage = () => {

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)

    const router = useRouter()

    const handleChangePassword = async (event: React.FormEvent) => {
        event.preventDefault()
        setError(null)
        setMessage(null)

        // Check if the new passwords match
        if (newPassword !== confirmNewPassword) {
            setError("New passwords do not match")
            return
        }

        try {
            const user = auth.currentUser
            if (user && user.email) {
                // Re-authenticate user with their current password
                const credential = EmailAuthProvider.credential(
                    user.email,
                    currentPassword
                )
                await reauthenticateWithCredential(user, credential)
                await updatePassword(user, newPassword)

                setMessage("Password changed successfully")

                // Clear the fields after successful password change
                setCurrentPassword("")
                setNewPassword("")
                setConfirmNewPassword("")
            } else {
                setError("No user is currently signed in")
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            } else {
                setError("An unknown error occurred")
            }
        }
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Change Password</h2>

            {/* Error message */}
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            {/* Success message */}
            {message && <div className="text-green-500 text-sm mb-4">{message}</div>}

            {/* Password change form */}
            <form onSubmit={handleChangePassword}>
                <div className="mb-4">
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
                    <input
                        type="password"
                        id="currentPassword"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter current password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                    <input
                        type="password"
                        id="confirmNewPassword"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Confirm new password"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Change Password
                </button>
            </form>

            {/* Button to go back to the account page */}
            <div className="mt-4 text-center">
                <button
                    onClick={() => router.push('/account')}
                    className="text-blue-600 hover:text-blue-800"
                >
                    Back to Account
                </button>
            </div>
        </div>
    )
}

export default PasswordChangePage
