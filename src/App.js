import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [inputValue, setInputvalue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, inputValue]);
    setInputvalue('');
  };

  const handleInputChange = (e) => {
    setInputvalue(e.target.value);
  };
  const handleDelete = (index) => {
    let temp = [...todos];
    // temp.splice(index, 1);
   let res = temp.filter((ele,ind)=> ind !== index)
    setTodos(res)
  };

  return (
    <div>
      <h1>toDo List!</h1>
      <div>
        <input type="text" onChange={handleInputChange} value={inputValue} />

        <button onClick={handleAdd}>Add</button>
        {todos.map((todo, index) => {
          return (
            <ul>
              <li key={index}>{todo}</li>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
