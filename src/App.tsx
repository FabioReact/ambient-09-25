import { BrowserRouter, Route, Routes } from 'react-router'
import HeroesList from './pages/HeroesList/HeroesList'
import MainLayout from './layout/MainLayout'
import HeroDetails from './pages/HeroDetails/HeroDetails'
import Search from './pages/Search/Search'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import AuthContext from './context/auth-context'
import { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import AuthContextProvider from './providers/AuthContextProvider'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<p>Home</p>} />
        <Route path='/heroes' element={<HeroesList />} />
        <Route path='/heroes/:id' element={<HeroDetails />} />
        <Route path='/search' element={<Search />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<p>404</p>} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <AppRoutes />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
