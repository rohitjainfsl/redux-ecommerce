import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("ecommerce/fetchData", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  console.log(response.data);
  return response.data;
});

export const ecomSlice = createSlice({
  name: "ecommerce",
  initialState: {
    products: [],
    isLoading: false,
    cart: [],
    showCart: false
  },
  reducers: {
    addToCart: function(state, action){
        state.cart = [...state.cart, action.payload]
    },
    toggleCart: function(state){
        state.showCart = !state.showCart
    }
  },

  extraReducers: {
    [fetchData.pending]: function (state, action) {
      state.isLoading = false;
    },
    [fetchData.fulfilled]: function (state, action) {
      state.isLoading = true;
      state.products = action.payload;
    },
    [fetchData.rejected]: function (state, action) {
      state.isLoading = false;
    },
  },
});

export const {addToCart, toggleCart} = ecomSlice.actions
export default ecomSlice.reducer;
