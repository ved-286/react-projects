import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './Slices/CartSlice'
import CategorySlice from './Slices/CategorySlice'

const Store = configureStore({
    reducer:{
        cart : cartSlice,
        category : CategorySlice,
    }
})

export default Store;