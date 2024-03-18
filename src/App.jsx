import ErrorBoundary from './pages/ErrorBoundary.jsx'
import Routing from './routes/Routing.jsx'

import { Toaster } from '@/src/components/ui/toaster'

function App() {
  return (
    <ErrorBoundary>
      <Routing />
      <Toaster />
    </ErrorBoundary>
  )
}

export default App
