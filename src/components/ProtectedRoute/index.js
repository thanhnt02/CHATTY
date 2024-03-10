import { useRef } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {

  const isLogin = useSelector(state => state.isLoginReducer);

  return (
    <>
      {isLogin ? (<Outlet/>) : (<Navigate to={"/login"}/>)}
    </>
  )
}

export default ProtectedRoutes;