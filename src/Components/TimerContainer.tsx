import React from 'react';

import Main from './MainFolder/Main';

import ActionGroups from './ActionGroups/ActionGroups';

import Count from './CountFolder/Count';

import TodoList from './TodoListFolder/TodoList';

import AppLogic from './AppLogic';

import { AppGlobalContainer } from './TimerContainerStyle';

const TimerContainer = () => {
    const {
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
    } = AppLogic();

    return (
        <AppGlobalContainer>
            <Count
            count={count}
            />
            <Main
            addTodo={addTodo}
            value={value}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            inputRef={inputRef}
            />
            <ActionGroups
            addTodo={addTodo}
            />
            <TodoList
            editTodo={editTodo}
            edit={edit}
            todos={todos}
            DeleteTodo={DeleteTodo}
            toogleTodo={toogleTodo}
            />
        </AppGlobalContainer>
    )
}

export default TimerContainer;