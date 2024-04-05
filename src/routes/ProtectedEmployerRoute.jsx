import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedEmployerRoute = () => {
  const [auth] = useAuth();
  if (auth.user && auth.user.role === null) {
    return <Navigate to="/" />;
  }
  if (auth.user && auth.user.role === "employer") {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedEmployerRoute;
