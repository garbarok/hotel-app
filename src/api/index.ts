import axios from 'axios'
import { WeatherData, Geocoding } from '@/types'

const apiInstance = axios.create({
  baseURL: 'https://api.openweathermap.org',
})

interface getObjectProps {
  city: string
}

interface getCoordinatesProps {
  lat: number
  lon: number
}

const fetchWeatherByCoordinates = async ({
  lat,
  lon,
}: getCoordinatesProps): Promise<WeatherData> => {
  const response = await apiInstance.get(
    `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f7dd5f65195d863069e051cef5e0e2ec&units=metric`
  )
  return response.data as WeatherData
}

const fetchCoordinates = async ({
  city,
}: getObjectProps): Promise<Geocoding[]> => {
  const response = await apiInstance.get(
    `/geo/1.0/direct?q=${city}&limit=5&appid=f7dd5f65195d863069e051cef5e0e2ec`
  )
  return response.data as Geocoding[]
}

export { fetchCoordinates, fetchWeatherByCoordinates }
