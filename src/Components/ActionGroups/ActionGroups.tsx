import React from 'react';

import ActionGroupsItem from './ActionGroupsItem';

import { ActionGroupsContainer } from './ActionGroupsStyle';

interface ActionGroupProps {
    addTodo:() => void;
}

const ActionGroups: React.FC<ActionGroupProps> = ({addTodo}) => {
    return (
        <ActionGroupsContainer>
            <ActionGroupsItem onClick={addTodo} title='Show All Tasks' />
            <ActionGroupsItem onClick={addTodo} title='Show Active Tasks'/>
            <ActionGroupsItem onClick={addTodo} title='Show Completed Tasks'/>
        </ActionGroupsContainer>
    )
}

export default ActionGroups;