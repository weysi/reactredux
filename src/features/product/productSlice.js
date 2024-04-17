import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  name: "product1",
  detail: "product Detail",
  price: 25,
  star: 3,
  comment: "Product Comment",
  stock: 25,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAll: (state) => {
      console.log("Clicked", state.name);
    },
    getFindbyId: (state) => {},
    removeProduct: (state, action) => {},
    addProduct: (state, action) => {},
  },
});

export const { getAll, getFindById, removeProduct } = productSlice.actions;

export default productSlice.reducer;
