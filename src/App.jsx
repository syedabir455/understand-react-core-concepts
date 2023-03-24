import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'
import Watch from './components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Device name="Iphone" price="200000"></Device>
      <Device name="Samsung" price="16000"></Device>
      <Watch></Watch>
    </div>
  )
}

export default App
