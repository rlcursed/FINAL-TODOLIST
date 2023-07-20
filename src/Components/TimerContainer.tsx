import React, {memo} from 'react';

import Main from './MainFolder/Main';

import ActionGroups from './ActionGroups/ActionGroups';

import TodoList from './TodoListFolder/TodoList';

import AppLogic from './AppLogic';

import { AppGlobalContainer } from './TimerContainerStyle';

const TimerContainer = () => {
    const {
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
        todoFiltered,
        filtered
    } = AppLogic();

    return (
        <AppGlobalContainer>
            <div>
            <h1>{todos.length === 1 ? todos.length + " task is active" : todos.length + " tasks is active"}</h1>
            </div>
            <div>
            <Main
            addTodo={addTodo}
            handleKeyDown={handleKeyDown}
            inputRef={inputRef}
            />
            </div>
            <div>
            <ActionGroups
            addTodo={addTodo}
            todoFiltered={todoFiltered}
            />
            </div>
            <div>
            <TodoList
            editTodo={editTodo}
            edit={edit}
            todos={todos}
            DeleteTodo={DeleteTodo}
            toogleTodo={toogleTodo}
            titleValue={titleValue}
            handleTitleChange={handleTitleChange}
            saveTodo={saveTodo}
            filtered={filtered}
            />
            </div>
        </AppGlobalContainer>
    )
}

export default memo(TimerContainer);