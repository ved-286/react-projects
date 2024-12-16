import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';


function Cart() {

  const [activeCart,setActiveCart] = useState(false)

  const cartItems = useSelector((state)=> state.cart.cart)

  const TotalQty = cartItems.reduce(
    (totalqty,item)=> totalqty + item.qty,0)

  const TotalAmount = cartItems.reduce(
    (totalPrice,item)=> totalPrice + item.qty * item.price ,0
  )
  
  return (
    <>
    <div className={`fixed right-0 top-0 lg:w-[23vw] w-full h-full p-5 bg-white ${activeCart ? "translate-x-0": "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between  items-center my-2 ' >
            <span className='text-xl font-bold text-gray-800 mb-3'>My Order</span>
            <IoCloseSharp onClick={()=> setActiveCart(!activeCart)} className='border-2 border-gray-600 hover:text-red-600 hover:border-red-600 rounded-md cursor-pointer mb-3'/>
        </div>
        
        { cartItems.length >0 ? cartItems.map((food)=> {
          return <ItemCard key={food.id}
           id={food.id}
            name={food.name}
             price={food.price} 
             img={food.img}
              qty={food.qty} />
          }) : <h2 className='font-bold pl-5 mt-10 text-gray-500 text-2xl  '>Your cart is empty!!</h2>}
        
        <div className='absolute bottom-0 pr-1 mb-2 right-3 '>
            <h3 className='font-semibold text-gray-800'>Items: {TotalQty} </h3>
            <h3 className='font-semibold text-gray-800'>Total Amount: {TotalAmount} </h3>
            <hr className='w-[90vw] lg:w-[18vw] my-3 font-bold'/>
            <button className='bg-green-600 font-bold text-white p-2 rounded-md w-[90vw] lg:w-[18vw]'>Checkout</button>
        </div>
    </div>
    <IoCart onClick={()=> setActiveCart(!activeCart)} className={`bg-white rounded-full p-2 text-5xl shadow-md fixed bottom-10 right-4 ${TotalQty >0 && "animate-bounce delay-500"} `} />
    </>
  )
}

export default Cart