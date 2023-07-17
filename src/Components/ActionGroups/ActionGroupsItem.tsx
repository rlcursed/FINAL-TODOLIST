import React from 'react';

import { ActionGroupButton } from './ActionGroupsStyle';

interface ItemsProps {
    onClick:() => void;
    title: string;
}

const ActionGroupsItem: React.FC<ItemsProps> = ({onClick, title}) => {
    return (
        <ActionGroupButton onClick={onClick}>{title}</ActionGroupButton>
    )
}

export default ActionGroupsItem;