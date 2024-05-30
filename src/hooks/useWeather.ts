import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {
  fetchWeather,
  selectCity,
  selectWeatherData,
  selectWeatherStatus,
  selectWeatherError,
} from '../lib/weatherSlice'

export const useWeather = () => {
  const dispatch = useDispatch()
  const city = useSelector(selectCity)
  const weatherData = useSelector(selectWeatherData)
  const status = useSelector(selectWeatherStatus)
  const error = useSelector(selectWeatherError)

  useEffect(() => {
    if (status === 'idle' || status === 'failed') {
      dispatch(fetchWeather(city))
    }
  }, [city, dispatch, status])

  return { weatherData, status, error }
}
