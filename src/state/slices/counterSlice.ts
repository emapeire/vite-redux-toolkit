import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    }
  }
})

export const { increment, decrement } = counterSlice.actions // these are the counterSlice actions
export default counterSlice.reducer // this is the counterReducer function
