import { useState } from 'react'
import { DatePicker } from 'antd';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <DatePicker />
    </div>
  )
}

export default App
