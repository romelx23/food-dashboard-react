import './App.css'
import { HomePage } from './pages'
import { UiProvider } from './context'

function App() {
  return (
    <div>
      <UiProvider>
        <HomePage />
      </UiProvider>
    </div>
  )
}

export default App
