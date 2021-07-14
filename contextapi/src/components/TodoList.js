import React, { useContext, useState } from 'react';
import { ThemeContext, TodoListContext  } from '../contexts';
//import {  } from '../contexts/TodoListContext';

// class TodoList extends React.Component {
//     static contextType = ThemeContext;
//     render() {
//         const {isDarkTheme, darkTheme, lightTheme, changeTheme} = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;
//         return (
            
//             <div  style={{ 
//                 background: theme.background, 
//                 color: theme.text, 
//                 height: '140px', 
//                 textAlign: 'center'}} 
//             >
//                 <p className='item'>Plan the family trip</p>
//                 <p className='item'>Go shopping for dinner</p>
//                 <p className='item'>Go for a walk</p>
//                 <button className='ui button primary' onClick={changeTheme}>Change Theme</button>
//             </div>
//         )
//     }
// }

const TodoList = () =>{
    const [todo, setTodo] = useState('');
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
    const { todos, addTodo, removeTodo } = useContext(TodoListContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value)
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
    };

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        removeTodo(id);
    };

    return (
        <div  style={{ 
            background: theme.background, 
            color: theme.text,  
            textAlign: 'center'}} 
        >
            {
                todos.length ? (
                    todos.map(todo => {
                        return <p key={todo.id} id={todo.id} onClick={handleRemoveTodo} className='item'>{todo.text}</p>
                    }) 
                ) : (
                    <div>You have no todos</div>
                )
            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='todo' >Add todo:</label>
                <input type='text' id='todo' onChange={handleChange} />
                <input className='ui button primary' type='submit' value='Add New Todo' style={{ marginRight: '4px'}} />
                <button className='ui button primary' onClick={changeTheme}>Change Theme</button>
            </form>
            
        </div>
    )
}

export {TodoList};