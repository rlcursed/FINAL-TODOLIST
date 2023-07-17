import React from 'react';

import { ITodo } from '../../data/data';

import TodoItem from './TodoItem';

import { TodoListStyleContainer } from './TodoListStyle';

interface TodoListProps {
    todos: ITodo[];
    DeleteTodo:(id: number) => void;
    toogleTodo:(id: number) => void;
    editTodo:(id: number) => void;
    edit: null | number | boolean;
}

const TodoList: React.FC<TodoListProps> = ({todos, DeleteTodo, toogleTodo,editTodo, edit}) => {
    return (
        <TodoListStyleContainer>
            {
                todos.map(todo => {
                     return <TodoItem
                        editTodo={editTodo}
                        edit={edit}
                        key={todo.id}
                        DeleteTodo={DeleteTodo}
                        toogleTodo={toogleTodo}
                        {...todo}
                    />
                })
            }
        </TodoListStyleContainer>
    )
}

export default TodoList;