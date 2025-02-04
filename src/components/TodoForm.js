import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        if (value) {

        addTodo(value);

        setValue('');
        }};
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Add your task' />
        <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}