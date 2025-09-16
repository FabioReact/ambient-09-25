import { BrowserRouter, Route, Routes } from "react-router"
import HeroesList from "./pages/HeroesList/HeroesList"
import MainLayout from "./layout/MainLayout"
import HeroDetails from "./pages/HeroDetails/HeroDetails"
import Search from "./pages/Search/Search"

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/heroes" element={<HeroesList />} />
        <Route path="/heroes/:id" element={<HeroDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<p>404</p>} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
