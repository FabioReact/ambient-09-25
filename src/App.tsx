import { BrowserRouter } from 'react-router'
import AuthContextProvider from './providers/AuthContextProvider'
import CounterContextProvider from './providers/CounterContextProvider'
import HeroContextProvider from './providers/HeroContextProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppRoutes from './routes'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthContextProvider>
            <HeroContextProvider>
              <CounterContextProvider>
                <Suspense fallback={<p>Global Loading...</p>}>
                  <AppRoutes />
                </Suspense>
              </CounterContextProvider>
            </HeroContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
