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
    let res = temp.filter((ele, ind) => ind !== index);
    setTodos(res);
  };

  const handleUpdate = (index) => {
    let updatedValue = prompt('Enter the updated value:');
    if (updatedValue) {
      let temp = [...todos];
      temp[index] = updatedValue;
      setTodos(temp);
    }
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

              <button onClick={() => handleUpdate(index)}>Update</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
