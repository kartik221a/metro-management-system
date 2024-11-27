'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase'; // Adjust path as needed

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

const useCheckAdmin = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email !== adminEmail) {
        router.push(user ? '/not-authorized' : '/login');
      }
    });

    return () => unsubscribe();
  }, [router]);
};

export default useCheckAdmin;
