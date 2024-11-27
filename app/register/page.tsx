'use client'
import React, { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation' // Correct import for router
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from 'firebase/auth'
import { auth } from '@/firebase/firebase'

const RegisterPage = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)

    const router = useRouter()

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault()
        setError(null)
        setMessage(null)

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            await sendEmailVerification(user)

            // Temporarily store user data in local storage
            localStorage.setItem(
                "registrationData",
                JSON.stringify({
                    firstName,
                    lastName,
                    gender,
                    email,
                })
            )

            setMessage(
                "Registration successful! Please check your email for verification."
            )

            // Clear form fields
            setFirstName("")
            setLastName("")
            setGender("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")

            // Navigate to a success or login page
            router.push('/login') // Change `/success` to your desired route

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            } else {
                setError("An unknown error occurred")
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
            <div className="max-w-md w-full bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
                {error && <p className="text-destructive text-sm mb-4">{error}</p>}
                {message && <p className="text-green-500 text-sm mb-4">{message}</p>}
                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Form Fields */}
                    <div>
                        <label className="block text-sm font-medium">First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-ring"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-ring"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Gender</label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-ring"
                            required
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-ring"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-ring"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-ring"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring focus:ring-ring"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage
