import "./App.css";
//Importing Components
import Form from "./Components/Form";
import TodoList from "./Components/Todolist";

function App() {
  return (
    <div className="App">
      <header>
        <h1>MIKE TO DO LIST</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
