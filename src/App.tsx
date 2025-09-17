import { BrowserRouter, Route, Routes } from 'react-router'
import HeroesList from './pages/HeroesList/HeroesList'
import MainLayout from './layout/MainLayout'
import HeroDetails from './pages/HeroDetails/HeroDetails'
import Search from './pages/Search/Search'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import AuthContextProvider from './providers/AuthContextProvider'
import CounterContextProvider from './providers/CounterContextProvider'
import Home from './pages/Home/Home'
import HeroContextProvider from './providers/HeroContextProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
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

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <HeroContextProvider>
            <CounterContextProvider>
              <AppRoutes />
            </CounterContextProvider>
          </HeroContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
