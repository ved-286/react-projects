import React from 'react'
import { CiSquarePlus,CiSquareMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/Slices/CartSlice';
import { incrementQty, decrementQty } from '../Redux/Slices/CartSlice';
import toast, { Toaster } from 'react-hot-toast';


function ItemCard({id,name,price,img,qty}) {
const dispatch = useDispatch();




  return (
    <>


<div className='flex gap-0.5 gap-5  shadow-lg border-gray-100 border p-3 rounded-lg mb-3'>

        <img className='w-[60px] h-[60px]' src={img} alt="" />
        <MdDelete onClick={()=> {
          dispatch(removeFromCart({id}))
          toast(`${name} removed from cart`,
            {
              icon: '😞',
              style: {
                border: '3px solid #f54545',
                borderRadius: '10px',
                background: '#fff',
                color: '#f54545',
              },
            }
          );
         
             }} className='absolute right-7 hover:text-white hover:bg-red-600 hover:border-none hover:rounded-lg transition-all ease-linear cursor-pointer' />
<div className='leading-5'>
        <h2 className='font-semibold text-gray-800'>{name}</h2>
    <div className='flex justify-between items-center gap-4'>
        <span className='text-green-500 font-bold'>₹{price}</span>
        <div className='flex justify-between items-center  gap-2 absolute right-8'>
            <CiSquarePlus onClick={()=> dispatch(incrementQty({id}))} className='hover:text-white hover:bg-green-600 hover:border-none transition-all ease-linear cursor-pointer'/>
            <span>{qty}</span>
            <CiSquareMinus onClick={()=> dispatch(decrementQty({id}))} className='hover:text-white hover:bg-green-600 hover:border-none transition-all ease-linear cursor-pointer'/>

        </div>
    </div>    
</div>
</div>
</>
  )

}

export default ItemCard