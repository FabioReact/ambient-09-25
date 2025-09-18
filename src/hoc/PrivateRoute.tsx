import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuthContext } from '../context/auth-context'

const PrivateRoute = () => {
  const { accessToken } = useAuthContext()
  const location = useLocation()

  if (!accessToken) {
    return <Navigate to='/login' state={{ from: location.pathname }} replace />
  }

  return <Outlet />
}

export default PrivateRoute
