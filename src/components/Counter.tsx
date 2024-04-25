import { useCounterAction } from '../hook/useCounterAction'
import { useAppSelector } from '../hook/useStore'

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const { handleDecrement, handleIncrement } = useCounterAction()

  return (
    <div className='flex flex-col space-y-8'>
      <h2 className='text-4xl font-bold'>{count}</h2>
      <div className='flex justify-center items-center text-2xl font-bold gap-x-8'>
        <button onClick={() => handleDecrement()}>Decrement</button>
        <button onClick={() => handleIncrement()}>Increment</button>
      </div>
    </div>
  )
}
