import { useState } from 'react';
import './App.css';
import { Task } from "./Task"

function App() {
  const [todoList, setTodoList] = useState([])  
  const [newTask, setNewTask] = useState("")

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    const taskObj = {
      id: todoList.length,
      todo: newTask,
      done: false
    }
    const newTodo = [...todoList, taskObj]
    setTodoList(newTodo)
    // console.log(newTodo)
    // setNewTask("")
  }

  const deleteTask = (taskKey) => {
    let tempTodo = [...todoList]
      tempTodo.splice(taskKey,1)
      setTodoList(tempTodo)
  }

  const taskDoneTF = (keyTask) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === keyTask.id) {
          if (task.done === false) {
            return {...task, done: true}
          } else {
            return {...task, done: false}
          }
        } else {
          return task
        }
      })
    )
   }

  return (
    <div className="App">
     <div className="addTask">
      <input onChange={handleChange}/>
      <button onClick={addTask}>+Task</button>
     </div>
     {/* List items */}
     <ul>
      {todoList.map((task, tKey) => {
        return (
          <span key={tKey} >
            <Task taskObj={task} tasKey={tKey} deleteTask={deleteTask} taskDoneTF={taskDoneTF} doneTrue={task.done} />
          </span>
        )
      })}
     </ul>
    </div>
  );
}

export default App;
