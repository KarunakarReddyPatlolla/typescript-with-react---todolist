import React, {useState, useRef, useEffect} from "react" ;
import {AiFillEdit, AiFillDelete} from "react-icons/ai" ;
import { MdDone } from "react-icons/md";
import {Todo} from "../models/models";
import "./style.css";



const SingleTodo: React.FC<{todo: Todo; todoList: Array<Todo>; inputTodoArray: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}> = ({todo, todoList, inputTodoArray}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const onClickEdit = (event: React.FormEvent, id: number) => {
        event.preventDefault();
        inputTodoArray(todoList.map((todo) => (todo.id === id ? {...todo, todo: editTodo} : todo)));
        setEdit(false);
    };

    const onClickDelete = (id: number) => {
        inputTodoArray(todoList.filter((todo) => todo.id !== id));
    };

    const onClickDone = (id: number) => {
        inputTodoArray(todoList.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
        );
    };

    return (
        <form className="todo_container" onSubmit = {(event) => onClickEdit(event, todo.id)}>
            {edit ? (<input value = {editTodo} onChange={(event) => setEditTodo(event.target.value)} ref={inputRef} /> ) : todo.isCompleted ? (<p className="todo_text todo_decoration"> {todo.todo} </p>) : (<p className="todo_text">{todo.todo}</p>)}
            <div>
                <button type="button" className="icon" onClick={() => { 
                    if (!edit && !todo.isCompleted) {
                        setEdit(!edit);
                    }
                }}
                > 
                    <AiFillEdit /> 
                </button>
                <button type="button" className="icon" onClick={() => onClickDelete(todo.id)}>
                    <AiFillDelete />
                </button>
                <button type="button" className="icon" onClick={() => onClickDone(todo.id)}> 
                    <MdDone />
                </button>
            </div>
        </form>
    );
};

export default SingleTodo ;