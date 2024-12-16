import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cart: []
    },
    reducers: {
        addToCart : (state,action)=>{

            const exsistingItem = state.cart.find((item) => item.id === action.payload.id)
           if (exsistingItem) {
           state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item, qty: item.qty + 1} : item)
            
           }else{

             state.cart.push(action.payload)
           }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
          },
        incrementQty : (state,action) => {
          state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item,qty: item.qty + 1} : item)
        },
        decrementQty : (state,action) => {
          state.cart = state.cart.map((item)=>{
            if(item.id === action.payload.id){
              return {...item,qty : item.qty > 1 ? item.qty - 1 : item.qty};
            }else{
              return item;
            }
          });
        }
      },
    })


export const {addToCart,removeFromCart,incrementQty,decrementQty} = CartSlice.actions
export default CartSlice.reducer;