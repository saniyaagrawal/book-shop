import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./Bill.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import My_Modal from './Modal';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function Bill() {
  
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        React Todo
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
      <My_Modal />
    </div>
  );
  
}

export default Bill;

// import React, { useState } from "react";
// //  import "./Bill.css";
// import { Button, Modal } from "@material-ui/core";
// import SaveIcon from "@material-ui/icons/Save";
// import { render } from "@testing-library/react";

// const Bill = () => {
//   state = {
//     isOpen: false
//   };

//   openModal = () => this.setState({ isOpen: true });
//   closeModal = () => this.setState({ isOpen: false });
//   render() {
//     return (
//       <>
//         <div className="background">
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             startIcon={<SaveIcon />}
//             onClick={this.openModal}
//           >
//             Add Book!
//           </Button>
//           <Modal show={this.state.isOpen} onHide={this.closeModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>Modal heading</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={this.closeModal}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       </>
//     );
//   }
  
// };
// export default Bill;
