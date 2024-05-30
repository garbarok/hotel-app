import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface HotelState {
  weather: string | null
  thingsToDo: string[]
}

const initialState: HotelState = {
  weather: null,
  thingsToDo: [],
}

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setWeather(state, action: PayloadAction<string>) {
      state.weather = action.payload
    },
    setThingsToDo(state, action: PayloadAction<string[]>) {
      state.thingsToDo = action.payload
    },
  },
})

export const { setWeather, setThingsToDo } = hotelSlice.actions
export default hotelSlice.reducer
