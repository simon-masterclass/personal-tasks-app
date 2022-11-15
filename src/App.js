import { useState } from 'react';
import './App.css';
import { Planets } from "./Planets"

function App() {
  const [todoList, setTodoList] = useState([])  
  const [newTask, setNewTask] = useState("")

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    const newTodo = [...todoList, newTask]
    setTodoList(newTodo)
  }

  return (
    <div className="App">
     <div className="addTask">
      <input onChange={handleChange}/>
      <button onClick={addTask}>+Task</button>
     </div>
    </div>
  );
}

export default App;
