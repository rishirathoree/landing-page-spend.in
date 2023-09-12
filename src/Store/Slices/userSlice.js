import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

const initialState = {
  users: [
    {
      email: 'user1@example.com',
      password: 'password123',
      cartItems:[],
      role: 'user',
    },
    {
      email: 'user2@example.com',
      password: 'secret@456',
      cartItems:[],
      role: 'user',
    },
    {
      email: 'admin1@example.com',
      password: 'adminPass1',
      cartItems:[],
      role: 'admin',
    },
    {
      email: 'admin2@example.com',
      password: 'adminPass2',
      cartItems:[],
      role: 'admin',
    },
  ],
  currentUser: null, 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    matchLoginCredential: (state, action) => {
      const { email, password } = action.payload;
      console.log(email);
      console.log(password);

      const findUser = state.users.find((user) => user.email === email && user.password === password);
      if (findUser) {
        
        state.currentUser = findUser;
        // Navigate('/')
        // console.log(`this is state ${JSON.stringify(state.currentUser)}`)
      } else {
        console.log('User not found');
        // Handle the case where no user matches the provided credentials.
      }
    },
    logout:(state,action)=>{
      state.currentUser = null
    },
    addProductToCart: (state, action) => {
      const productToAdd = action.payload;
      console.log(productToAdd)
      if (state.currentUser) {
        const existingCartItemIndex = state.currentUser.cartItems.findIndex(
          (item) => item.id === productToAdd.id
        );
    
        if (existingCartItemIndex !== -1) {
          state.currentUser.cartItems[existingCartItemIndex].qty += 1;
        } else {
          state.currentUser.cartItems.push({...productToAdd,qty:1});
        }
      }
    },
    IncreaseQuantityCartItem:(state,action)=>{
      const cartItemId = action.payload
      console.log(cartItemId)
      const findExistingProductToUpdateItsQuantity = state.currentUser.cartItems.findIndex((item)=>item.id === cartItemId)
      if(findExistingProductToUpdateItsQuantity !== -1){
        state.currentUser.cartItems[findExistingProductToUpdateItsQuantity].qty += 1;
      }
    },
    DecreaseQuantityCartItem:(state,action)=>{
      const cartItemId = action.payload
      console.log(cartItemId)
      const findExistingProductToUpdateItsQuantity = state.currentUser.cartItems.findIndex((item)=>item.id === cartItemId)
      if(findExistingProductToUpdateItsQuantity !== -1){
        if(state.currentUser.cartItems[findExistingProductToUpdateItsQuantity].qty > 1){
          state.currentUser.cartItems[findExistingProductToUpdateItsQuantity].qty -= 1;
        }
      }
    },
    removeCartItem:(state,action)=>{
      const cartProductId = action.payload
    }
  },
});

export const { matchLoginCredential,logout,addProductToCart,IncreaseQuantityCartItem,DecreaseQuantityCartItem } = userSlice.actions;
export default userSlice.reducer;
