import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';


function Cart() {

  const [activeCart,setActiveCart] = useState(true)

  const cartItems = useSelector((state)=> state.cart.cart)
  console.log(cartItems);
  
  return (
    <>
    <div className={`fixed right-0 top-0 lg:w-[23vw] w-full h-full p-5 bg-white ${activeCart ? "translate-x-0": "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between  items-center my-2 ' >
            <span className='text-xl font-bold text-gray-800 mb-3'>My Order</span>
            <IoCloseSharp onClick={()=> setActiveCart(!activeCart)} className='border-2 border-gray-600 hover:text-red-600 hover:border-red-600 rounded-md cursor-pointer mb-3'/>
        </div>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <div className='absolute bottom-0 pr-1 mb-2 right-2'>
            <h3 className='font-semibold text-gray-800'>Items: </h3>
            <h3 className='font-semibold text-gray-800'>Total Amount: </h3>
            <hr className='w-[90vw] lg:w-[18vw] my-3 font-bold'/>
            <button className='bg-green-600 font-bold text-white p-2 rounded-md w-[90vw] lg:w-[18vw]'>Checkout</button>
        </div>
    </div>
    <IoCart onClick={()=> setActiveCart(!activeCart)} className='bg-white rounded-full p-2 text-5xl shadow-md fixed bottom-10 right-4 ' />
    </>
  )
}

export default Cart