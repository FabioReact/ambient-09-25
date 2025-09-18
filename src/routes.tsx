import { Route, Routes } from 'react-router'
// import HeroesList from './pages/HeroesList/HeroesList'
import MainLayout from './layout/MainLayout'
// import HeroDetails from './pages/HeroDetails/HeroDetails'
// import Search from './pages/Search/Search'
// import Register from './pages/Register/Register'
// import Profile from './pages/Profile/Profile'
// import Home from './pages/Home/Home'
// import Login from './pages/Login/Login'
import PrivateRoute from './hoc/PrivateRoute'
// import Battle from './pages/Battle/Battle'
// import Logout from './pages/Logout/Logout'
// import Optimisations from './pages/learning/Optimisations'
import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home/Home'))
const HeroesList = lazy(() => import('./pages/HeroesList/HeroesList'))
const HeroDetails = lazy(() => import('./pages/HeroDetails/HeroDetails'))
const Search = lazy(() => import('./pages/Search/Search'))
const Register = lazy(() => import('./pages/Register/Register'))
const Profile = lazy(() => import('./pages/Profile/Profile'))
const Login = lazy(() => import('./pages/Login/Login'))
const Battle = lazy(() => import('./pages/Battle/Battle'))
const Logout = lazy(() => import('./pages/Logout/Logout'))
const Optimisations = lazy(() => import('./pages/learning/Optimisations'))

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/heroes' element={<HeroesList />} />
        <Route path='/heroes/:id' element={<HeroDetails />} />
        <Route path='/battle' element={<Battle />} />
        <Route path='/search' element={<Search />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<p>404</p>} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/secret' element={<p>Secret page</p>} />
          <Route path='/optimisations' element={<Optimisations />} />
          <Route path='/logout' element={<Logout />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
