import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import MustLogin from "../pages/MustLogin";

const RequireAuth = () => {
  const { auth } = useAuth();

  return (
    auth?.email ? <Outlet /> : <MustLogin />
    // <Outlet />
  )

}

export default RequireAuth;