import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store'
import { decrementAsync, incrementAsync } from '../state/slices/counterSlice'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className='flex flex-col space-y-8'>
      <h2 className='text-4xl font-bold'>{count}</h2>
      <div className='flex justify-center items-center text-2xl font-bold gap-x-8'>
        <button onClick={() => dispatch(decrementAsync(10))}>Decrement</button>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
      </div>
    </div>
  )
}
