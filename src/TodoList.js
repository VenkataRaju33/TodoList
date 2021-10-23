import React from 'react'
const TodoList=({todos,deleteHandler})=>{
    return(
        <div>
            {
                todos.map((todo,index)=>
                <div key={index}>
                  <h2>{todo} &nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h2>
                </div>)
            }
        </div>
    )
}
export default TodoList