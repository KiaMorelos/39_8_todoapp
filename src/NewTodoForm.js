import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({newTodo}) => {
    const [formData, setFormData] = useState({
        todoText: "",
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }));
      };

      const userInput = evt => {
        evt.preventDefault();
        newTodo({ ...formData, id: uuid() });
        setFormData({ todoText: "" });
      };

    return (
        <div>
            <form onSubmit={userInput}>
                <div>
                    <label htmlFor='New To Do:'>New To Do:</label>
                    <input onChange={handleChange} type="text" name="todoText" value={formData.todoText} id="todoText"></input>
                </div>
                <button>Add new todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;