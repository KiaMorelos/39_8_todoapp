const Todo = ({id, todoText, handleRemove}) => {
    return (
       
        <li>{todoText} 
        <button onClick={() => handleRemove(id)}>X</button>
        </li>
      
    )
}

export default Todo;