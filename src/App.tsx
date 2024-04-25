import Counter from './components/Counter'
import './App.css'

export default function App() {
  return (
    <div className='flex flex-col space-y-16'>
      <h1 className='text-4xl font-bold'>Redux Complete Tutorial</h1>
      <Counter />
    </div>
  )
}
