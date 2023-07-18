import React, {FC, memo}  from 'react';

import { ActionGroupButton } from './ActionGroupsStyle';

interface ItemsProps {
    onClick:() => void;
    title: string;
}

const ActionGroupsItem: FC<ItemsProps> = ({onClick, title}) => {
    return (
        <ActionGroupButton onClick={onClick}>{title}</ActionGroupButton>
    )
}

export default memo(ActionGroupsItem);