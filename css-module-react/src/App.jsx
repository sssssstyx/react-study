import { useState } from 'react'
import './App.css'
import ButtonDemo1 from './demo/demo1'
import ButtonDemo2 from './demo/demo2'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <ButtonDemo1 />
      <ButtonDemo2 />
    </>
  )
}

export default App
