import { Filter } from "@/global-interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    type: "search", // default filter type
    value: "", // default filter value
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter.type = action.payload.type;
      state.filter.value = action.payload.value;
    },
  },
});

export const { setFilter } = userSlice.actions;
export default userSlice.reducer;
