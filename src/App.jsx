import React, { useState } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  console.log(todos);

  // Definisi toggletCompleted
  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //Menambahkan fitur delete dengan mendefinisikan const de
  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      {/* Teruskan function addTodo sebagai props */}
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

/**CSS Inline Style */
const styles = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
  title: {
    fontSize: "36px",
  },
};

export default App;
