import "./App.css";
import React, { useState } from "react";
//Importing Components
import Form from "./Components/Form";
import TodoList from "./Components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>MIKE TO DO LIST</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
