import React from 'react';
import { Navbar, TodoList } from './components';
import { ThemeContextProvider, AuthContextPovider, TodoListContextProvider } from './contexts';
// import AuthContextpPovider from './contexts/AuthContext';
// import ThemeContextProvider from './contexts/ThemeContext';
//import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
        <ThemeContextProvider>
          <AuthContextPovider>
            <TodoListContextProvider>
              <Navbar />
              <TodoList /> 
            </TodoListContextProvider>
          </AuthContextPovider>
        </ThemeContextProvider>

      </div>
    </div>
  );
}

export default App;
