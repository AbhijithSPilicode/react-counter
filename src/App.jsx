import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App</h1>
      <div class="counter">{count}</div>
      <div className="card">
        <button class="add" onClick={() => setCount((count) => count + 1)}>+</button>
        <button class="subtract" onClick={() => setCount((count) => count - 1)}>-</button>
        <button class="reset" onClick={() => setCount((count) => count=0)}>Reset</button>
      </div>
    </>
  )
}

export default App
