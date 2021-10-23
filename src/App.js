import React,{useState} from 'react';
import TodoList from './TodoList';
import "./App.css"

function App() {
  const [task,setTask]= useState("");
  const[todos,setTodos]=useState([]);
  const changeHandler= e=>{
    setTask(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault();
    const newTodos=[...todos,task];
    setTodos(newTodos);
    setTask("")
  }
  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=>index!==indexValue);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <center>
      <h1>Todo Management Application</h1>
      <form onSubmit={submitHandler}>
        <input size="30" type="text" name="task" value={task} onChange={changeHandler}/> &nbsp;
        <input type="submit"value="Add" name="Add"/> 
      </form>
      <TodoList todos={todos} deleteHandler={deleteHandler}/>
    </center>
    </div>
  );
}

export default App;
