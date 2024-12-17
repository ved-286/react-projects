import React,{ useEffect, useState } from 'react'
import FoodData from '../Data/FoodData'
import {useDispatch,useSelector} from "react-redux";
import { setCategory } from '../Redux/Slices/CategorySlice';

function CategoryMenu({category}) {

const [catogories, setCatogories] = useState([])

const listUniqueCategories = ()=>{
  const uniqueCategories = [...new Set(FoodData.map((food)=> food.category))];
  setCatogories(uniqueCategories);
  console.log(uniqueCategories);
}

useEffect(()=>{
  listUniqueCategories();
},[])

const dispatch = useDispatch();
const selectedCategory = useSelector((state)=> state.category.category)

  return (
    <div className='mx-6'>
        <h3 className='font-semibold text-xl'>Find your favorite food</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button  onClick={
                  ()=>{
                    dispatch(setCategory("All"))
                  }
                } className={`px-2 py-1 bg-gray-200 rounded-lg  font-bold hover:bg-green-600 hover:text-white ${selectedCategory === "All" && "bg-green-600 text-white"}`}>All</button>
           
            {
              catogories.map((category,index)=>{
                return <button key={index} onClick={
                  ()=>{
                    dispatch(setCategory(category))
                  }
                } className={`px-2 py-1 bg-gray-200 rounded-lg  font-bold hover:bg-green-600 hover:text-white ${selectedCategory === category && "bg-green-600 text-white"}`}>{category}</button>
              })
            }
        </div>
    </div>
  )
}

export default CategoryMenu