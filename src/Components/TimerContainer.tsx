import React, {memo} from 'react';

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
            <Count
            count={count}
            />
            </div>
            <div>
            <Main
            addTodo={addTodo}
            value={value}
            handleChange={handleChange}
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