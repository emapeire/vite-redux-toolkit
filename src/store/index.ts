import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import { persistanceLocalStorageMiddleware } from '../middlewares'

export const store = configureStore({
  reducer: { counter: counterReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
