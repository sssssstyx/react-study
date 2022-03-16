import React, { useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface Todo {
  title: String;
  status: boolean;
}

function App() {
  const [todos,setTodos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/todo')
    .then(data => data.json())
    .then(data => {
      console.log(data);
      setTodos(data.todoList);
    })
  },[])
  return (
    <div className="App">
     <ul>
       {
         todos.map((todo:Todo,index) => (
            <li key={index}>{todo.title}</li>
         ))
       }
     </ul>
    </div>
  );
}

export default App;
