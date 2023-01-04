import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  isLogin: token?.length > 0 ? true : false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
      localStorage.setItem("token", "lkakjdfljajsdfjasdkj");
    },
    logout: (state) => {
      state.isLogin = false;
      localStorage.removeItem("token");
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
