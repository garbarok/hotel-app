'use client'
import React from 'react'

interface CityInputProps {
  newCity: string
  handleCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleSearch: () => void
}

const CityInput: React.FC<CityInputProps> = ({
  newCity,
  handleCityChange,
  handleKeyDown,
  handleSearch,
}) => {
  return (
    <div className="bg-blue-600 p-4">
      <input
        type="text"
        value={newCity}
        onChange={handleCityChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter city"
        className="w-full p-2 rounded-md text-black"
      />
      <button
        onClick={handleSearch}
        className="mt-2 w-full p-2 bg-white text-blue-600 rounded-md"
      >
        Search
      </button>
    </div>
  )
}

export default CityInput
