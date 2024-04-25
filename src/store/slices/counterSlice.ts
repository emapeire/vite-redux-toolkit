import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const DEFAULT_VALUE = {
  value: 0
}

const initialState: CounterState = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  return persistedState ? JSON.parse(persistedState).counter : DEFAULT_VALUE
})()

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount: CounterState['value']) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return amount
  }
)

export const decrementAsync = createAsyncThunk(
  'counter/decrementAsync',
  async (amount: CounterState['value']) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return amount
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
    reset: (state) => {
      state.value = DEFAULT_VALUE.value
    },
    incrementByAmount: (
      state,
      action: PayloadAction<CounterState['value']>
    ) => {
      state.value += action.payload
    },
    decrementByAmount: (
      state,
      action: PayloadAction<CounterState['value']>
    ) => {
      state.value -= action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        console.log('incrementAsync.pending', state)
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<CounterState['value']>) => {
          state.value += action.payload
        }
      )
      .addCase(decrementAsync.pending, (state) => {
        console.log('decrementAsync.pending', state)
      })
      .addCase(
        decrementAsync.fulfilled,
        (state, action: PayloadAction<CounterState['value']>) => {
          state.value -= action.payload
        }
      )
  }
})

// these are the counterSlice actions
export const {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount
} = counterSlice.actions

// this is the counterReducer function
export default counterSlice.reducer
