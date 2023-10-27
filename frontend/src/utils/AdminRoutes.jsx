import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function AdminRoutes() {
  const user = useSelector((state) => state.auth.user);

  if (!user?.admin) {
    toast.error('This page is allowed only for admins')
    return <Navigate to="/" />
  }
  return <Outlet />
}

export default AdminRoutes