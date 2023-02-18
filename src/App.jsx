import { useState } from 'react'
import { HomePage } from './components/homepage'
import './App.css'

function App() {
  
  const [isStart, setIsStart] = useState(false)

  return (
    <div className="App">
      <HomePage/>
    </div>
  )
}

export default App
