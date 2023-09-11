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
    addItemtoCart: (state, action) => {
      const addSelectedProductToCart = action.payload;
      console.log(addSelectedProductToCart);
    },
    logout:(state,action)=>{
      state.currentUser = null
    }
  },
});

export const { matchLoginCredential,addItemtoCart,logout } = userSlice.actions;
export default userSlice.reducer;
