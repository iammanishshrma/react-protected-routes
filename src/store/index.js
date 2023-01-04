import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";

const store = configureStore({
  reducer: {
    authData: authSlice,
  },
});

export default store;
