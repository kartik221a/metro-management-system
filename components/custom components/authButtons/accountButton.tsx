'use client'

import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'

const AccountButton = () => {
  return (
    <Link href="/account" className="flex items-center space-x-2">
      {/* User Icon SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-5 w-5 text-gray-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14c4.418 0 8 3.582 8 8H4c0-4.418 3.582-8 8-8zM12 4a4 4 0 11-.001 8.001A4 4 0 0112 4z"
        />
      </svg>
    </Link>
  )
}

export default AccountButton
