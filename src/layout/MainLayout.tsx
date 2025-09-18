import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Navigation from '../components/Nav/Navigation'

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <ToastContainer />
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
