import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className='w-full h-screen bg-slate-600'>
    <div className='text-white flex flex-row justify-center items-center pt-11'>
    <h1>for practice of props</h1>
    </div>
   </div>
  )
}

export default App
