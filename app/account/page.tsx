'use client'
import React from "react";

import Loading from "@/components/custom components/loading";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from '@/firebase/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import type { User } from "firebase/auth";

export default function Account() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  const router = useRouter()

  const adminEmail = 'kartik.2426mca664@kiet.edu'

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if(user){
        if(user.emailVerified){
          const userDoc = await getDoc(doc(firestore, 'users', user.uid))

          if(!userDoc.exists()){
            //retrieve user data from local storage
            const registrationData = localStorage.getItem('registrationData');
            const {
              firstName = "",
              lastName = "",
              gender = "",
            } = registrationData ? JSON.parse(registrationData) : {}

            await setDoc(doc(firestore, 'users', user.uid),{
              firstName,
              lastName,
              gender,
              email:user.email,
            })

            //clear registration data from local storage
            localStorage.removeItem('registrationData')
          }
          setUser(user);
          if(user.email === adminEmail){
            router.push("/admin/admindashboard")
          } else{
              router.push("/dashboard")
          }
        } else {
          setUser(null);
          router.push("/login")
        }
      } else {
        setUser(null);
        router.push('/login')
      }
      setLoading(false)
    })
  
    
  })
  
  if(loading){
    return (
      <Loading />
    )
  }

  return (
    <div>
      {user ? 'Redirecting to dashboard...' : 'Redirecting to login...'}
    </div>
  );
}
