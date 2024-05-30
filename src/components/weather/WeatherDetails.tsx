'use client'
import React from 'react'
import { WeatherData } from '@/types'
import Image from 'next/image'

interface WeatherDetailsProps {
  city: string
  weatherData: WeatherData
}

const formatTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  city,
  weatherData,
}) => {
  return (
    <>
      <p className="text-2xl font-bold text-gray-800">
        {city}, {weatherData.sys.country}
      </p>
      <p className="text-gray-600 font-bold capitalize">
        {weatherData.weather[0].description}
      </p>
      <Image
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
        width={100}
        height={100}
        className="mx-auto"
      />
      <p className="text-4xl font-bold text-gray-800">
        {Math.round(weatherData.main.temp)}°C
      </p>
      <div className="grid grid-cols-2 mt-4">
        <div>
          <p className="text-gray-600 font-bold">Wind</p>
          <p className="text-gray-800">
            {weatherData.wind.speed} km/h, {weatherData.wind.deg}°
          </p>
        </div>
        <div>
          <p className="text-gray-600 font-bold">Humidity</p>
          <p className="text-gray-800">{weatherData.main.humidity}%</p>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-4">
        <div>
          <p className="text-gray-600 font-bold">Sunrise</p>
          <p className="text-gray-800">{formatTime(weatherData.sys.sunrise)}</p>
        </div>
        <div>
          <p className="text-gray-600 font-bold">Sunset</p>
          <p className="text-gray-800">{formatTime(weatherData.sys.sunset)}</p>
        </div>
      </div>
    </>
  )
}

export default WeatherDetails
