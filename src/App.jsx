import { Toaster } from '@/src/components/ui/toaster'
import ErrorBoundary from './pages/ErrorBoundary.jsx'

import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'
import { isAuthenticated } from './helpers/Utils.js'
import HomeScreen from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import CustomerPlaceOrderForm from './pages/customerPlaceOrder'
import Header from './components/Header.jsx'
import clsx from 'clsx'

const PrivateRoutes = () => {
  return isAuthenticated() ? (
    <>
      <Header className={'py-4 px-12 lg:px-20'} />
      <main className={clsx('py-4 px-12 lg:px-20', 'mt-20 !py-10 h-full')}>
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/login" />
  )
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {/* PRIVATE ROUTES */}
          <Route element={<PrivateRoutes />}>
            <Route
              path={'/customer-place-order'}
              exact={true}
              element={<CustomerPlaceOrderForm />}
            />
          </Route>

          {/* PUBLIC ROUTES */}
          <Route exact path={'/'} element={<HomeScreen />} />
          <Route path="/login" element={<Login />} />

          {/* FALLBACK ROUTE */}
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There&apos;s nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
      <Toaster />
    </ErrorBoundary>
  )
}

export default App
