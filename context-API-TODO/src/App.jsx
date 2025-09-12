import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoContextProvider from './context/TodoContextProvider';
import TodoContext from './context/TodoContext';
import { useContext } from 'react';
import TodoList from './components/TodoList';


// This child component can access the context because it's inside the Provider


function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <h1 className="text-3xl text-green-400 font-bold underline">
          Hello world!
        </h1>
        <TodoItem />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}

export default App;
