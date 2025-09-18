import { NavLink } from 'react-router'
import { useAppSelector } from '../../redux/hooks'

enum LinkVisibility {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED',
}

const Navigation = () => {
  const getActiveClassNames = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'text-red-600 font-bold' : 'font-bold'
  }

  const accessToken = useAppSelector((state) => state.auth.accessToken)
  const isConnected = accessToken !== null

  const links = [
    { to: '/', label: 'Home', visibility: LinkVisibility.PUBLIC },
    { to: '/battle', label: 'Battle', visibility: LinkVisibility.PUBLIC },
    { to: '/heroes', label: 'Heroes', visibility: LinkVisibility.PUBLIC },
    { to: '/search', label: 'Search', visibility: LinkVisibility.PUBLIC },
    { to: '/profile', label: 'Profile', visibility: LinkVisibility.PRIVATE },
    { to: '/optimisations', label: 'Optiomisations', visibility: LinkVisibility.PRIVATE },
    { to: '/logout', label: 'Logout', visibility: LinkVisibility.PRIVATE },
    {
      to: '/register',
      label: 'Register',
      visibility: LinkVisibility.NOT_AUTHENTICATED,
    },
    {
      to: '/login',
      label: 'Login',
      visibility: LinkVisibility.NOT_AUTHENTICATED,
    },
  ]
  return (
    <header>
      <nav>
        <ul className='flex justify-center gap-4'>
          {links
            .filter((link) => {
              if (link.visibility === LinkVisibility.PUBLIC) return true
              if (link.visibility === LinkVisibility.PRIVATE && isConnected) return true
              if (link.visibility === LinkVisibility.NOT_AUTHENTICATED && !isConnected) return true
            })
            .map((link) => (
              <li>
                <NavLink to={link.to} className={getActiveClassNames}>
                  {link.label}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
