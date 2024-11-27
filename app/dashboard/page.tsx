'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, firestore } from "@/firebase/firebase"
import type { User } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import Loading from '@/components/custom components/loading'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'


const DashboardPage = () => {
    const [user, setUser] = useState<User | null>(null)
    const [userName, setUserName] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user)
                const userDoc = await getDoc(doc(firestore, 'users', user.uid))
                if (userDoc.exists()) {
                    const userData = userDoc.data()
                    setUserName(`${userData.firstName} ${userData.lastName}`)
                }
            } else {
                router.push('/login')
            }
            setLoading(false)
        })

        // Cleanup subscription on unmount
        return () => unsubscribe()
    }, [router])

    const handleLogout = async () => {
        try {
            await signOut(auth)
            router.push("/login")
        } catch (error) {
            console.error('Logout error: ', error)
        }
    }

    const handleChangePassword = () => {
        router.push('/changepassword')
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md bg-white shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src="/path-to-profile-pic.jpg" alt="User Avatar" />
                            <AvatarFallback>{userName?.[0] ?? "?"}</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-lg font-bold">Welcome, {userName || "User"}!</CardTitle>
                            <p className="text-sm text-muted-foreground">Manage your account</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <Button onClick={handleChangePassword} className="w-full bg-blue-600 hover:bg-blue-700">
                            Change Password
                        </Button>
                        <Button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700">
                            Logout
                        </Button>
                    </div>
                </CardContent>
                <CardFooter>
                    <p className="text-center text-sm text-gray-500">
                        Need help? Visit our{' '}
                        <a href="/support" className="text-blue-600 hover:underline">
                            Support Page
                        </a>
                        .
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default DashboardPage
