import { useAppDispatch, useAppSelector } from '../hook/useStore'
import {
  decrementByAmount,
  incrementByAmount
} from '../state/slices/counterSlice'

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleIncrement = () => {
    dispatch(incrementByAmount(10))
  }

  const handleDecrement = () => {
    dispatch(decrementByAmount(10))
  }

  return (
    <div className='flex flex-col space-y-8'>
      <h2 className='text-4xl font-bold'>{count}</h2>
      <div className='flex justify-center items-center text-2xl font-bold gap-x-8'>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  )
}
