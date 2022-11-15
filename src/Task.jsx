export const Task = (props) => {
  return(  
    <li className="task" key={props.tasKey}>
      <h1 style={{color: props.doneTrue ? "red" : "black"}}>{props.taskObj.todo}</h1>
      <button onClick={() => props.taskDoneTF(props.taskObj)}>Done</button>
      <button onClick={() => props.deleteTask(props.tasKey)}>X</button>
    </li>
  )  
}