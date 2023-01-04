import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { login, logout } from "../../store/slices/auth/authSlice";

const Header = () => {
  const isLogin = useSelector((state) => state.authData.isLogin);
  const dispatch = useDispatch();

  const buttonClickHanlder = () => {
    if (isLogin) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/checkout">Checkout</NavLink>
      <button onClick={buttonClickHanlder}>
        {isLogin ? "Logout" : "login"}
      </button>
    </>
  );
};

export default Header;
