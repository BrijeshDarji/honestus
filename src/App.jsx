import { Toaster } from '@/src/components/ui/toaster'
import ErrorBoundary from './pages/ErrorBoundary.jsx'

import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'
import { isAuthenticated } from '@/src/helpers/utils.js'
import HomeScreen from '@/src/pages/Home.jsx'
import Login from '@/src/pages/Login.jsx'
import CustomerPlaceOrderForm from '@/src/pages/customerPlaceOrder'
import Header from '@/src/components/Header.jsx'
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
