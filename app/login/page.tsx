'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation' // Corrected from 'next/router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, firestore } from '@/firebase/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import Link from 'next/link'

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)

    const router = useRouter()

    const adminEmail = 'kartik.2426mca664@kiet.edu'

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault()
        setError(null)

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            if (user.emailVerified) {
                // Retrieve user data from local storage
                const registrationData = localStorage.getItem('registrationData')
                const {
                    firstName = "",
                    lastName = "",
                    gender = "",
                } = registrationData ? JSON.parse(registrationData) : {}

                // Check if user data exists in Firestore
                const userDoc = await getDoc(doc(firestore, 'users', user.uid))

                if (!userDoc.exists()) {
                    // Save user data to Firestore after email verification
                    await setDoc(doc(firestore, 'users', user.uid), {
                        firstName,
                        lastName,
                        gender,
                        email: user.email,
                    })
                }
                if(email === adminEmail){
                    router.push('/admin/admindashboard')
                }
                else{
                    router.push('/dashboard')
                }
            } else {
                setError("Please verify your email before logging in.")
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message) // Display specific Firebase error message
            } else {
                setError('An unknown error occurred.')
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
            <div className="max-w-md w-full bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                {error && <p className="text-destructive text-sm mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
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
                    <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring focus:ring-ring"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center mt-4">
                    Don’t have an account?{' '}
                    <Link href="/register" className="text-primary hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage
