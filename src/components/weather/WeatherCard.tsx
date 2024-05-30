'use client'
import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent } from '../ui/card'
import {
  fetchWeather,
  setCity,
  selectCity,
  selectWeatherData,
  selectWeatherStatus,
  selectWeatherError,
} from '@/lib/weatherSlice'
import { getItem, setItem } from '@/lib/local-storage'
import CityInput from './CityInput'
import WeatherDetails from './WeatherDetails'
import StatusMessage from './StatusMessage'

const WeatherCard: React.FC = () => {
  const dispatch = useDispatch()
  const city = useSelector(selectCity)
  const weatherData = useSelector(selectWeatherData)
  const status = useSelector(selectWeatherStatus)
  const error = useSelector(selectWeatherError)
  const [newCity, setNewCity] = useState('')

  const { refetch } = useQuery({
    queryKey: ['weather', city],
    queryFn: async () => {
      if (city) {
        const data = await dispatch(fetchWeather(city)).unwrap()
        return data
      } else {
        return null
      }
    },
    enabled: !!city,
  })

  useEffect(() => {
    const savedCity = getItem('city')
    if (savedCity) {
      dispatch(setCity(savedCity))
      setNewCity(savedCity)
      refetch()
    }
  }, [dispatch, refetch])

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCity(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      handleSearch()
    }
  }

  const handleSearch = () => {
    if (newCity.trim()) {
      dispatch(setCity(newCity))
      setItem({ key: 'city', value: newCity })
      refetch()
    }
  }

  return (
    <Card className="shadow-lg rounded-lg overflow-hidden">
      <CityInput
        newCity={newCity}
        handleCityChange={handleCityChange}
        handleKeyDown={handleKeyDown}
        handleSearch={handleSearch}
      />
      <CardContent className="p-4 text-center">
        <StatusMessage status={status} error={error} />
        {status === 'succeeded' && weatherData && (
          <WeatherDetails city={city} weatherData={weatherData} />
        )}
      </CardContent>
    </Card>
  )
}

export default WeatherCard
