import React, {FC,memo} from 'react';

import Button from '../ButtonsFolder/Button';

import { MainContainer, MainInput } from './MainStyles';

interface MainProps {
    addTodo:() => void;
    handleKeyDown:(e: React.KeyboardEvent<HTMLInputElement>) => void;
    inputRef: any ;
}

const Main: FC<MainProps> = ({addTodo, handleKeyDown, inputRef}) => {
    return(
        <MainContainer>
            <MainInput onKeyDown={handleKeyDown} ref={inputRef}/>
            <Button onClick={addTodo} title='ADD'></Button>
        </MainContainer>
    )
}

export default memo(Main);