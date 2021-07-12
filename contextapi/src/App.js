import React from 'react';
import { Navbar, TodoList } from './components';
import ThemeContextProvider from './contexts/ThemeContext';
//import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
        <ThemeContextProvider>
          <Navbar />
          <TodoList /> 
        </ThemeContextProvider>

      </div>
    </div>
  );
}

export default App;
