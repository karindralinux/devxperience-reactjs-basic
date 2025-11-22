import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("Todo sekarang , ", todos);
  }, [todos]);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };

    console.log(`Todo sebelum , `, todos);
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new todo..."
          className="todo-input"
          aria-label="Add a new todo"
        />
        <button
          onClick={handleAddTodo}
          className="add-button"
          aria-label="Add todo"
        >
          Add
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="empty-message">No todos yet. Add one above!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                className="todo-checkbox"
                aria-label={`Mark "${todo.text}" as ${
                  todo.completed ? "incomplete" : "complete"
                }`}
              />
              <span
                className={`todo-text ${todo.completed ? "completed" : ""}`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="delete-button"
                aria-label={`Delete "${todo.text}"`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {todos.length > 0 && (
        <div className="todo-stats">
          <span>
            Total: {todos.length} | Completed:{" "}
            {todos.filter((t) => t.completed).length} | Remaining:{" "}
            {todos.filter((t) => !t.completed).length}
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
