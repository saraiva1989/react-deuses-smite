import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Rotas } from './Rotas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Rotas />
    </div>
  )
}

export default App
