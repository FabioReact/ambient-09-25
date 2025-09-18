import { Navigate, Outlet, useLocation } from 'react-router'
import { useAppSelector } from '../redux/hooks'

const PrivateRoute = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken)
  const location = useLocation()

  if (!accessToken) {
    return <Navigate to='/login' state={{ from: location.pathname }} replace />
  }

  return <Outlet />
}

export default PrivateRoute
