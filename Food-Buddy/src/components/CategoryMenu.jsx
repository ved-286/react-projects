import React from 'react'

function CategoryMenu() {
  return (
    <div className='mx-6'>
        <h3 className='font-semibold text-xl'>Find your favorite food</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
            <button className='px-2 py-1 bg-gray-200 rounded-lg  font-bold hover:bg-green-600 hover:text-white'>All</button>
            <button className='px-2 py-1 bg-gray-200 rounded-lg font-bold hover:bg-green-600 hover:text-white'>BreakFast</button>
            <button className='px-2 py-1 bg-gray-200 rounded-lg font-bold hover:bg-green-600 hover:text-white'>Lunch</button>
            <button className='px-2 py-1 bg-gray-200 rounded-lg font-bold hover:bg-green-600 hover:text-white'>Dinner</button>
            <button className='px-2 py-1 bg-gray-200 rounded-lg font-bold hover:bg-green-600 hover:text-white'>Snacks</button>
        </div>
    </div>
  )
}

export default CategoryMenu