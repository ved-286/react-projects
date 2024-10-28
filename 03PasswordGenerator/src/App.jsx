import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqurstuvwxyz"
    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "!@#$%^&&*(((*()+(*&&^%$"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[numberAllowed,charAllowed,length,setPassword])

  return (
    <>
    <div className='w-full max-w-md mx-auto text-orange-500 p-2 bg-gray-700 border-spacing-1 border-white rounded-md '>
      <h1 className='text-center text-white'>Password generator</h1>
      <div className='flex'>
        <input type="text"
         value={password}
         placeholder='password'
         className='w-full px-2 py-3 outline-none rounded-sm'
         readOnly
        />
        <button className='bg-blue-600 text-white p-2  rounded-sm'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
       <div className='flex items-center gap-x-1'>
          <input type="range"
                 value={length}
                 min={8}
                 max={90}
                 className='cursor-pointer'
                 onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
          
       </div>
       <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberinput'
          onChange={(e)=>{setNumberAllowed((prev)=!prev)}}
           />
           <label htmlFor="numberInput">Number</label>
       </div>
       <div className='flex items-center gap-x-1'>
        <input type="checkbox"
               defaultChecked={charAllowed}
               id='charInput'
               onChange={(e)=>{charAllowed((prev)= !prev)}}
        />
        <label htmlFor="charInput">Charecter</label>

       </div>
      </div>
    </div>
    </>
  )
}

export default App
