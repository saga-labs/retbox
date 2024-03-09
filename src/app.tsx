import { useState } from 'react'

// pages
import Dashboard from './pages/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return <Dashboard/>
}

export default App
