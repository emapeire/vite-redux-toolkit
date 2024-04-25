import { useCounterAction } from '../hooks/useCounterAction'
import { useAppSelector } from '../hooks/useStore'

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const { handleDecrement, handleIncrement, handleReset } = useCounterAction()

  return (
    <div className='flex flex-col gap-y-8 justify-center w-full'>
      <h2 className='text-4xl font-bold'>{count}</h2>
      <div className='flex justify-center items-center gap-x-8'>
        <button className='text-xl font-bold' onClick={() => handleDecrement()}>
          Decrement
        </button>
        <button className='text-xl font-bold' onClick={() => handleIncrement()}>
          Increment
        </button>
      </div>
      <button className='font-bold text-xl' onClick={() => handleReset()}>
        Reset
      </button>
    </div>
  )
}
