import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (specialCharAllowed) str += "` ~ @ ! $ # ^ * % & ( ) [ ] { } < > + = _ – | / \ ; : ‘ “ , . ?"

  }, [length, numberAllowed, specialCharAllowed, setPassword]) 

  return (
   <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
   </>
  )
}

export default App
