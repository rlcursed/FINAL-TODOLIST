import React from 'react';
import { DisplayContainer } from './DisplayStyle';

interface DisplayProps{
    minutes: number;
    seconds: number;
    mseconds: number;
}


const Display: React.FC<DisplayProps> = ({minutes, seconds, mseconds}) => {
    return (
        <DisplayContainer>
            <>
                {minutes > 10? minutes : "0" + minutes}
                :
                {seconds > 10? seconds : "0" + seconds}
                :
                {mseconds > 10? mseconds : "0" + mseconds}
            </>
        </DisplayContainer>
    )
}

export default React.memo(Display);