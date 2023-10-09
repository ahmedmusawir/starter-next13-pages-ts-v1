import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  categoryTerm: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.categoryTerm = "";
      state.searchTerm = action.payload;
    },
    setCategoryTerm: (state, action) => {
      state.searchTerm = "";
      state.categoryTerm = action.payload;
    },
  },
});

export const { setSearchTerm, setCategoryTerm } = productSlice.actions;
export default productSlice.reducer;
