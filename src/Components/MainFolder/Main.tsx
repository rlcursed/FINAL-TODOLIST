import React, {FC,memo} from 'react';

import Button from '../ButtonsFolder/Button';

import { MainContainer, MainInput } from './MainStyles';

interface MainProps {
    addTodo:() => void;
    value: string;
    handleChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown:(e: React.KeyboardEvent<HTMLInputElement>) => void;
    inputRef: any;
}

const Main: FC<MainProps> = ({addTodo, value, handleChange, handleKeyDown, inputRef}) => {
    return(
        <MainContainer>
            <MainInput value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}/>
            <Button onClick={addTodo} title='ADD'></Button>
        </MainContainer>
    )
}

export default memo(Main);