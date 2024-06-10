import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15;

  let addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  let removeValue = () => {
    if (counter > 0) {
      setCounter( counter - 1);
    }
  }

  return (
    <>
      <h1>Why learning hooks is important</h1>
      <h2>Cunter value : {counter}</h2>

      <button onClick={addValue}
      >Add value</button>
      <br />
      <button onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
