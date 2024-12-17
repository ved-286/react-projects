
import React, { useEffect, useState } from 'react'
import {SyncLoader} from "react-spinners"

function Success() {

  const [ loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
      {loading? <SyncLoader color='#00FF00'/> :
          <div>
      
          <h2 className='text-3xl text-green-500'>Order SuccessFull!!!!</h2>
          <h2 className='text-3xl'>Order Has Been SuccessFully Placed!! </h2>
          </div>
       }
      
    </div>
  )
}

export default Success
