import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1> 
    </div>
  )
}

export default App
