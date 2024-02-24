// App.jsx
import React,{useState, useEffect} from 'react';
import Header from './components/Header'; // Assurez-vous que le chemin vers le composant Header est correct
import './index.css';
import Todolist from './components/Todolist';
import Form from './components/form';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const[ input, setInput] = useState("");
  const[todos, setTodos] = useState(initialState);
  const[ editTodo, setEditTodo] = useState(null);
useEffect(() =>{
  localStorage.setItem("todos",JSON.stringify(todos));
},[todos]);
  return (
    <div className='container'>
      <div className='app-wrapper'>
             <div>
        <Header /> 
        </div>
        <div>
        <Form
        input={input}
        setInput={setInput}
        todos={todos} 
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
          />
          </div>
          <div>
           <Todolist todos={todos}
            setTodos={setTodos} 
           setEditTodo={setEditTodo}/> 
          </div>
      </div>
     
          </div>
  );
}

export default App;
