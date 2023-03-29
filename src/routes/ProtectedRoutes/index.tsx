import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function ProtectedRoutes() {
  const { user, loadingToken } = useContext(UserContext);
  const location = useLocation();

  if (loadingToken) {
    return null;
  }

  return Object.keys(user).length !== 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}

export default ProtectedRoutes;
