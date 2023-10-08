import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  cardTerm: "",
  currencyTerm: "",
  genderTerm: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.cardTerm = "";
      state.currencyTerm = "";
      state.genderTerm = "";
      state.searchTerm = action.payload;
    },
    setCardTerm: (state, action) => {
      state.currencyTerm = "";
      state.genderTerm = "";
      state.searchTerm = "";
      state.cardTerm = action.payload;
    },
    setCurrencyTerm: (state, action) => {
      state.genderTerm = "";
      state.searchTerm = "";
      state.cardTerm = "";
      state.currencyTerm = action.payload;
    },
    setGenderTerm: (state, action) => {
      state.searchTerm = "";
      state.cardTerm = "";
      state.currencyTerm = "";
      state.genderTerm = action.payload;
    },
  },
});

export const { setSearchTerm, setCardTerm, setCurrencyTerm, setGenderTerm } =
  userSlice.actions;
export default userSlice.reducer;
