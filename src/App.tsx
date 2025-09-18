import { BrowserRouter } from 'react-router'
import AuthContextProvider from './providers/AuthContextProvider'
import CounterContextProvider from './providers/CounterContextProvider'
import HeroContextProvider from './providers/HeroContextProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppRoutes from './routes'

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
