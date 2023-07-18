import React, {FC,memo}  from 'react';

import { CountContainer } from './CountStyles';

interface CountProps {
    count: number;
}

const Count: FC<CountProps> = ({count}) => {
    return (
        <CountContainer>
            <span>{count === 1 ? count + " task is active" : count + " tasks is active"}</span>
        </CountContainer>
    )
}

export default memo(Count);