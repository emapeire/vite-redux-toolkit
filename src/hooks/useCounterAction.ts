import { useAppDispatch } from './useStore'
import {
  decrementByAmount,
  incrementByAmount,
  reset
} from '../store/slices/counterSlice'

export const useCounterAction = () => {
  const dispatch = useAppDispatch()

  const handleIncrement = () => {
    dispatch(incrementByAmount(10))
  }

  const handleDecrement = () => {
    dispatch(decrementByAmount(10))
  }

  const handleReset = () => {
    dispatch(reset())
  }

  return { handleIncrement, handleDecrement, handleReset }
}
