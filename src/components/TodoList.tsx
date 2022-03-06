import React from "react" ;
import SingleTodo from "./SingleTodo" ;
import {Todo} from "../models/models";
import "./style.css";

interface Props {
    todoList : Array<Todo> ;
    inputTodoArray : React.Dispatch<React.SetStateAction<Array<Todo>>> ;
}

const TodoList : React.FC<Props> = ({
    todoList, inputTodoArray,
}) => {
    return (
        <div>
            <h1 className="heading"> Active Todos</h1>
            <div className="todoList_container">
                {todoList?.map((todo) => (
                    <SingleTodo todoList= {todoList} inputTodoArray ={inputTodoArray} todo={todo} key = {todo.id} />
                ))}
            </div>
        </div>
    );
};

export default TodoList ;