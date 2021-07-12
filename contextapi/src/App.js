import React from 'react';
import { Navbar, TodoList } from './components';
//import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
        <Navbar />
        <TodoList /> 

      </div>
    </div>
  );
}

export default App;
