import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
// import Navigation from '../components/Nav/Navigation'

const Navigation = lazy(() => import('../components/Nav/Navigation'))

const MainLayout = () => {
  return (
    <>
      <Suspense fallback={'Loading...'}>
        <Navigation />
      </Suspense>
      <main>
        <ToastContainer />
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
