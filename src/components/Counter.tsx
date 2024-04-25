import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/store'
import { increment, decrement } from '../state/slices/counterSlice'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counterReducer.value)
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col space-y-8'>
      <h2 className='text-4xl font-bold'>{count}</h2>
      <div className='flex justify-center items-center text-2xl font-bold gap-x-8'>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  )
}
