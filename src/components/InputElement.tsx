import React, {useRef} from "react" ;
import "./style.css";

interface Props {
    todo: string;
    inputTodo : React.Dispatch<React.SetStateAction<string>>;
    addTodoItem : (event: React.FormEvent) => void ;
}

const InputElement : React.FC<Props> = ({todo, inputTodo, addTodoItem}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit = {(event) =>  {
            addTodoItem(event);
        }}
        >
            <div className="input_container" >
                <input type="text" placeholder = "Enter your Task" className="input_box" value ={todo} ref = {inputRef} onChange = {(event) => inputTodo(event.target.value)} />
                <button type="submit" className="button" >Add</button>
            </div>
        </form>
    );
};

export default InputElement ;