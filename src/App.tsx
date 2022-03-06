import React, {useState} from 'react';
import './App.css';
import InputElement from "./components/InputElement";
import TodoList from "./components/TodoList" ;
import {Todo} from "./models/models" ;


const App = () => {
  const [todo, inputTodo ] = useState<string>("");
  const [todoList, inputTodoArray] = useState<Array<Todo>>([]);
  const [completedTodo, completedTodoList] = useState<Array<Todo>>([]);

  const addTodoItem = (event: React.FormEvent) => {
    event.preventDefault();

    if (todo) {
      inputTodoArray([...todoList, {id: Date.now(), todo: todo, isCompleted: false}]);
      inputTodo("");
    }
  };


  return (
    <div className="App">
      <h1> Todo List </h1>
      <InputElement todo={todo} inputTodo = {inputTodo} addTodoItem ={addTodoItem} />
      <TodoList todoList = {todoList} inputTodoArray ={inputTodoArray} />
    </div>
  );
}

export default App;
