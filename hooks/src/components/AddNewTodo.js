import React, { useState } from 'react';

const AddNewTodo = ({addTodo}) => {
    const [todo, setTodo] =useState('')
    const onSubmitForm = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    };

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <label for="todo"></label>
                <input type="text" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <input type="submit" />
            </form> 
        </div>
    );
}

export default AddNewTodo;
