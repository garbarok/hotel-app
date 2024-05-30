'use client'
import React from 'react'

interface StatusMessageProps {
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const StatusMessage: React.FC<StatusMessageProps> = ({ status, error }) => {
  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'failed') {
    return (
      <p className="text-red-500 text-sm">
        Error loading weather data: {error}
      </p>
    )
  }
  return null
}

export default StatusMessage
