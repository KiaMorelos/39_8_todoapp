import { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const newTodo = todo => {
        setTodos(todos => [...todos, todo]);
    }

    const removeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    const todoComps = todos.map(todo => (
        <Todo key={todo.id} id={todo.id} todoText={todo.todoText}  handleRemove={removeTodo}/>
    ));

    return (
        <>
        <NewTodoForm newTodo={newTodo}/>
        <ul>
        {todoComps}
        </ul>
        </>
    )
}

export default TodoList;