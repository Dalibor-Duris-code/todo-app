import { useState } from 'react'
import {FormWrapper} from "./components/FormWrapper";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormWrapper/>
    </>
  )
}

export default App
