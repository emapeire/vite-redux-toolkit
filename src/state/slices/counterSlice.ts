import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

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

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions // these are the counterSlice actions

export default counterSlice.reducer // this is the counterReducer function
