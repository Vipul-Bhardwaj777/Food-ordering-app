import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import resReducer from "./resSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    restaurantData: resReducer,
  },
});

export default appStore;
