import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './Slices/CartSlice'

const Store = configureStore({
    reducer:{
        cart : cartSlice,
    }
})

export default Store;