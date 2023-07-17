import React from 'react';

import Button from '../ButtonsFolder/Button';

import { TodoItemContainer } from './TodoListStyle';

import { ITodo } from '../../data/data';

interface TodoItemProps extends ITodo {
    DeleteTodo:(id: number) => void;
    toogleTodo:(id: number) => void;
    editTodo:(id: number) => void;
    edit: null | number | boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({DeleteTodo, toogleTodo, title, id, completed,editTodo, edit}) => {
    return (
        <>
            {edit === id?
            <TodoItemContainer>
            <input type='text'/> 
            <Button onClick={() => editTodo(id)} title='Save'></Button>
            </TodoItemContainer>
            :
            <TodoItemContainer>
            <input type='checkbox' checked={completed} onChange={() => toogleTodo(id)}/>
            {title}
            <Button onClick={() => DeleteTodo(id)} title='Delete'></Button>
            <Button onClick={() => editTodo(id)} title='Edit'></Button>
            </TodoItemContainer>
            }
            
        </>
    )
}

export default TodoItem;