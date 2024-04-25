import { useAppDispatch } from './useStore'
import {
  decrementByAmount,
  incrementByAmount
} from '../state/slices/counterSlice'

export const useCounterAction = () => {
  const dispatch = useAppDispatch()

  const handleIncrement = () => {
    dispatch(incrementByAmount(10))
  }

  const handleDecrement = () => {
    dispatch(decrementByAmount(10))
  }

  return { handleIncrement, handleDecrement }
}
