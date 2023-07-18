import React, {FC, memo} from 'react';

import ActionGroupsItem from './ActionGroupsItem';

import { ActionGroupsContainer } from './ActionGroupsStyle';

interface ActionGroupProps {
    addTodo:() => void;
    todoFiltered:(status: string | boolean) => void;
}

const ActionGroups: FC<ActionGroupProps> = ({addTodo, todoFiltered}) => {
    return (
        <ActionGroupsContainer>
            <ActionGroupsItem onClick={() => todoFiltered("all")} title='Show All Tasks' />
            <ActionGroupsItem onClick={() => todoFiltered(false)} title='Show Active Tasks'/>
            <ActionGroupsItem onClick={() => todoFiltered(true)} title='Show Completed Tasks'/>
        </ActionGroupsContainer>
    )
}

export default memo(ActionGroups);