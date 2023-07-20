import React, {useState, useRef, useEffect, useCallback} from "react";

import { v4 as uuidv4 } from 'uuid';

import { ITodo } from "../data/data";

const AppLogic = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [edit, setEdit] = useState<null | string | boolean>(null);
    const [titleValue, setTitleValue] = useState("");
    const [filtered, setFiltered] = useState(todos)

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        setFiltered(todos)
    }, [todos])

    const addTodo = useCallback(() => {
        if(inputRef.current){
            setTodos([...todos, {
                id: uuidv4(),
                title: inputRef.current.value,
                completed: false
        }])
        inputRef.current.value = ""
    }
    }, [todos])

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") addTodo();
    }, [addTodo]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitleValue = e.target.value;
        setTitleValue(newTitleValue);
    };

    const DeleteTodo = useCallback((id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }, [todos]);

    const toogleTodo = useCallback((id: string) => {
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo;

            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }, [todos])

    const editTodo = useCallback((id: string, title: string) => {
        setEdit(id)
    }, [])

    const saveTodo = useCallback((id: string) => {
        let newTodo = [...todos].map((item) => {
            if(item.id === id) {
                item.title = titleValue
            }
            return item
        })
        setTodos(newTodo);
        setTitleValue("")
        setEdit(null)
    }, [titleValue, todos])

    const todoFiltered = useCallback((status: string | boolean) => {
        if(status === "all") {
            setFiltered(todos)
        } else {
            let newTodo = [...todos].filter ((item) => item.completed === status)
            setFiltered(newTodo)
        }
    }, [todos])

    useEffect(() => {
        if(inputRef.current) inputRef.current.focus();
    }, [])

    return (
        {
            todos, 
            addTodo,
            DeleteTodo,
            handleKeyDown,
            inputRef,
            toogleTodo,
            editTodo,
            edit,
            titleValue,
            handleTitleChange,
            saveTodo,
            filtered,
            todoFiltered
        }
    )
}

export default AppLogic;