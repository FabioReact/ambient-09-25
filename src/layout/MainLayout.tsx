import { Outlet, NavLink } from 'react-router'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  const getActiveClassNames = ({ isActive }: { isActive: boolean }) => {
    // let classNames = 'cursor-pointer'
    return isActive ? 'text-red-600 font-bold' : 'font-bold'
  }
  return (
    <>
      <header>
        <nav>
          <ul className='flex justify-center gap-4'>
            <li>
              <NavLink to='/' className={getActiveClassNames}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/heroes' className={getActiveClassNames}>
                Heroes
              </NavLink>
            </li>
            <li>
              <NavLink to='/search' className={getActiveClassNames}>
                Search
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' className={getActiveClassNames}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/register' className={getActiveClassNames}>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to='/profile' className={getActiveClassNames}>
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <ToastContainer />
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
