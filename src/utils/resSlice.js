import { createSlice } from "@reduxjs/toolkit";

const resSlice = createSlice({
  name: "restaurantData",
  initialState: {
    resList: [],
  },

  reducers: {
    addResList: (state, action) => {
      state.resList = action.payload;
    },
    removeResList: (state) => {
      state.resList.length = 0;
    },
  },
});

export const { addResList, removeResList } = resSlice.actions;
export default resSlice.reducer;
