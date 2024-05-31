import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCoordinates, fetchWeatherByCoordinates } from '@/api'
import { RootState } from './store'
import { WeatherData, Geocoding } from '@/types'
import { setItem } from './local-storage'

interface WeatherState {
  city: string
  weatherData: WeatherData | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: WeatherState = {
  city: '',
  weatherData: null,
  status: 'idle',
  error: null,
}

export const fetchWeather = createAsyncThunk<WeatherData, string>(
  'weather/fetchWeather',
  async (city: string) => {
    const coordinates: Geocoding[] = await fetchCoordinates({ city })
    if (coordinates.length === 0) {
      throw new Error('City not found')
    }
    const { lat, lon } = coordinates[0]
    const weatherData = await fetchWeatherByCoordinates({ lat, lon })
    return weatherData
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload
      setItem({ key: 'city', value: action.payload })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchWeather.fulfilled,
        (state, action: PayloadAction<WeatherData>) => {
          state.status = 'succeeded'
          state.weatherData = action.payload
        }
      )
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch weather data'
      })
  },
})

export const { setCity } = weatherSlice.actions

export const selectCity = (state: RootState) => state.weather.city
export const selectWeatherData = (state: RootState) => state.weather.weatherData
export const selectWeatherStatus = (state: RootState) => state.weather.status
export const selectWeatherError = (state: RootState) => state.weather.error

export default weatherSlice.reducer
