import React from 'react'
import { CiSquarePlus,CiSquareMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

function ItemCard() {
  return (
<div className='flex gap-0.5 gap-5  shadow-lg border-gray-100 border p-3 rounded-lg mb-3'>

        <img className='w-[60px] h-[60px]' src="https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png" alt="" />
        <MdDelete className='absolute right-7 hover:text-white hover:bg-red-600 hover:border-none hover:rounded-lg transition-all ease-linear cursor-pointer' />
<div className='leading-5'>
        <h2 className='font-semibold text-gray-800'>Fruit Skewers</h2>
    <div className='flex justify-between items-center gap-4'>
        <span className='text-green-500 font-bold'>₹70</span>
        <div className='flex justify-between items-center  gap-2 absolute right-8'>
            <CiSquarePlus className='hover:text-white hover:bg-green-600 hover:border-none transition-all ease-linear cursor-pointer'/>
            <span>1</span>
            <CiSquareMinus className='hover:text-white hover:bg-green-600 hover:border-none transition-all ease-linear cursor-pointer'/>

        </div>
    </div>    
</div>
</div>
  )
}

export default ItemCard