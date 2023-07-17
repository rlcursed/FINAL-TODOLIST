import React, {useState, useRef, useEffect} from "react";

import { ITodo } from "../data/data";

const AppLogic = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [value, setValue] = useState("");
    const [count, setCount] = useState(0);
    const [edit, setEdit] = useState<null | number | boolean>(null)

    const inputRef = useRef<HTMLInputElement>(null)

    const addTodo = () => {
        if(value){
            setCount(count + 1)
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                completed: false
        }])
    }
        setValue("")
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") addTodo();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
    };

    const DeleteTodo = (id: number) => {
        setCount(count - 1)
        setTodos(todos.filter(todo => todo.id !== id))
    };

    const toogleTodo = (id: number) => {
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo;

            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }

    const editTodo = (id: number) => {
        setEdit(id)
    }

    useEffect(() => {
        if(inputRef.current) inputRef.current.focus();

        
    }, [])

    return (
        {
            todos, 
            addTodo,
            value,
            handleChange,
            DeleteTodo,
            handleKeyDown,
            inputRef,
            toogleTodo,
            count,
            editTodo,
            edit
        }
    )
}

export default AppLogic;