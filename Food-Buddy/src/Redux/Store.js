import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './Slices/CartSlice'
import CategorySlice from './Slices/CategorySlice'
import SearchSlice from './Slices/SearchSlice'

const Store = configureStore({
    reducer:{
        cart : cartSlice,
        category : CategorySlice,
        search : SearchSlice,
    }
})

export default Store;