import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("ecommerce/fetchData", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export const ecomSlice = createSlice({
  name: "ecommerce",
  initialState: {
    products: [],
    isLoading: true,
    cart: [],
    showCart: false,
    categories: [],
  },
  reducers: {
    addToCart: function (state, action) {
      state.cart = [...state.cart, action.payload];
    },
    toggleCart: function (state) {
      state.showCart = !state.showCart;
    },
  },

  extraReducers: {
    [fetchData.pending]: function (state) {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: function (state, action) {
      state.isLoading = false;
      if(state.categories.length === 0)
        action.payload.forEach((product) => {
        state.categories = [...state.categories, product.category]
      })
      state.products = action.payload;
    },
    [fetchData.rejected]: function (state) {
      state.isLoading = true;
    },
  },
});

export const { addToCart, toggleCart } = ecomSlice.actions;
export default ecomSlice.reducer;
