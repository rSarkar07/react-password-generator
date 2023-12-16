import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
     <h1 className='text-white font-bold text-center text-4xl'>Password Generator</h1>
    </>
  )
}

export default App
