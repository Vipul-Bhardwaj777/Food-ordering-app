import { createSlice } from "@reduxjs/toolkit";

const resSlice = createSlice({
  name: "restaurantData",
  initialState: {
    resList: [],
    menuData: null,
  },

  reducers: {
    addResList: (state, action) => {
      state.resList = action.payload;
    },
    removeResList: (state) => {
      state.resList.length = 0;
    },
    addResMenu: (state, action) => {
      state.menuData = action.payload;
    },
    removeResMenu: (state) => {
      state.menuData = null;
    },
  },
});

export const { addResList, removeResList, addResMenu, removeResMenu } =
  resSlice.actions;
export default resSlice.reducer;
