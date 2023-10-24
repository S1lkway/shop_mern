import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from 'react-redux'

function AdminRoutes() {
  const user = useSelector((state) => state.auth.user);

  if (!user.admin) {
    return <Navigate to="/" />
  }
  return <Outlet />
}

export default AdminRoutes