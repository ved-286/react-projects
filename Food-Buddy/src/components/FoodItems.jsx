import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'
import toast, { Toaster } from 'react-hot-toast';

function FoodItems() {

  const handleToast = (name)=> toast.success(`Added ${name}`)
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div className='flex flex-wrap justify-center gap-10 lg:justify-start mx-8 my-10'>
    {FoodData.map((food) => (
      
        <FoodCard  key={food.id} 
        id={food.id}
        img={food.img}
        name={food.name} 
        price={food.price} 
        desc={food.desc} 
        rating={food.rating}
        handleToast={handleToast}/>
    ))
    }
    </div>
    </>
  )
}

export default FoodItems