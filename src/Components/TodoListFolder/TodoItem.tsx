import React, {FC,memo} from 'react';

import Button from '../ButtonsFolder/Button';

import { TodoItemContainer, ButtonContainer } from './TodoListStyle';

import { ITodo } from '../../data/data';

interface TodoItemProps extends ITodo {
    DeleteTodo:(id: string) => void;
    toogleTodo:(id: string) => void;
    editTodo:(id: string, title: string) => void;
    edit: null | string | boolean;
    titleValue: string;
    handleTitleChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    saveTodo:(id: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({DeleteTodo, toogleTodo, title, id, completed,editTodo, edit, titleValue, handleTitleChange,saveTodo}) => {
    return (
        <>
            {edit === id ?
            <TodoItemContainer>
            <input type='text' value={titleValue} onChange={handleTitleChange}/> 
            <Button onClick={() => saveTodo(id)} title='Save'></Button>
            </TodoItemContainer>
            :
            <TodoItemContainer>
            <input type='checkbox' checked={completed} onChange={() => toogleTodo(id)}/>
            {title}
            <ButtonContainer>
                <Button onClick={() => DeleteTodo(id)} title='Delete'></Button>
                <Button onClick={() => editTodo(id, titleValue)} title='Edit'></Button>
            </ButtonContainer>
            </TodoItemContainer>
            }
            
        </>
    )
}

export default memo(TodoItem);