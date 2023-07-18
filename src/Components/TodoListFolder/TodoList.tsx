import React, {FC,memo} from 'react';

import { ITodo } from '../../data/data';

import TodoItem from './TodoItem';

import { TodoListStyleContainer } from './TodoListStyle';

interface TodoListProps {
    todos: ITodo[];
    DeleteTodo:(id: string) => void;
    toogleTodo:(id: string) => void;
    editTodo:(id: string, title: string) => void;
    edit: null | string | boolean;
    titleValue: string;
    handleTitleChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    saveTodo:(id: string) => void;
    filtered: ITodo[];
}

const TodoList: FC<TodoListProps> = ({filtered, todos, DeleteTodo, toogleTodo,editTodo, edit, titleValue, handleTitleChange, saveTodo}) => {
    return (
        <TodoListStyleContainer>
            {
                filtered.map(todo => {
                     return <TodoItem
                        handleTitleChange={handleTitleChange}
                        editTodo={editTodo}
                        edit={edit}
                        key={todo.id}
                        DeleteTodo={DeleteTodo}
                        toogleTodo={toogleTodo}
                        titleValue={titleValue}
                        saveTodo={saveTodo}
                        {...todo}
                    />
                })
            }
        </TodoListStyleContainer>
    )
}

export default memo(TodoList);