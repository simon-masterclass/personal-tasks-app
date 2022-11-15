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
    // console.log(newTodo)
    // setNewTask("")
  }

  const deleteTask = (taskKey) => {
    let tempTodo = [...todoList]
      tempTodo.splice(taskKey,1)
      setTodoList(tempTodo)
  }

  return (
    <div className="App">
     <div className="addTask">
      <input onChange={handleChange}/>
      <button onClick={addTask}>+Task</button>
     </div>
     {/* List items */}
     <div>
      {todoList.map((task, key) => {
        return (<div key={key}>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(key)}>X</button>
        </div>)
      })}
     </div>
    </div>
  );
}

export default App;
