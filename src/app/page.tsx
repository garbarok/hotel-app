'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const HomePage: React.FC = () => {
  const { isLoaded, userId } = useAuth()

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (userId) {
    redirect('/dashboard')
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Hotel
        </h1>
        <p className="text-gray-600 mb-4">Experience the best stay with us</p>
      </header>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col justify-center ">
        <p className="text-center text-lg text-gray-700 mb-6">
          Please sign in or sign up to continue
        </p>
        <Button>
          <Link href="/sign-in">Sign in</Link>
        </Button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default HomePage
