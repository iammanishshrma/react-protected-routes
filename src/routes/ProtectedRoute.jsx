import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props, { path }) => {
  const isLogin = useSelector((state) => state.authData.isLogin);

  if (!isLogin) {
    return <Navigate to="/" replace={true} />;
  }

  return <Fragment>{props.children}</Fragment>;
};

export default ProtectedRoute;
