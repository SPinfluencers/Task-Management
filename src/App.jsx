import { useState } from 'react'
import './App.css'
import Task from './Components/Task'
import TaskInput from './Components/TaskInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Task />
      <TaskInput />
    </div>
  )
}

export default App
