import ErrorBoundary from "./components/ErrorBoundary.jsx"
import Routing from "./routes/Routing.jsx"

function App() {
	return (
		<ErrorBoundary>
			<Routing />
		</ErrorBoundary>
	)
}

export default App
