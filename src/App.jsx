import { useState } from 'react'
import { HomePage } from './components/homepage'
import Quiz from './components/quiz'
import './App.css'

function App() {
  
  const [isStart, setIsStart] = useState(false)

  function toggleGameStart() {
    setIsStart(true)
  }

  return (
    <div className="App">
      {!isStart ? <HomePage toggleStart = {toggleGameStart}/> : <Quiz/>}
    </div>
  )
}

export default App
