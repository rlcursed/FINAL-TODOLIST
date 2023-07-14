import React from 'react';
import Button from './Button';
import { ButtonContainer } from './ButtonStyle';

interface ButtonGroupProps {
    handleStart:() => void;
    handlePause:() => void;
    handleContinue:() => void;
    handleReset:() => void;
    status: number;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({handleStart,handlePause,handleContinue,handleReset,status}) => {
    return(
        <>
            {status === 0 ? 
            <Button onClick={handleStart} title='START'></Button>
            :
            ""
            }
            {status === 1 ? 
            <ButtonContainer>
            <Button onClick={handlePause} title='PAUSE'></Button>
            <Button onClick={handleReset} title='RESET'></Button>
            </ButtonContainer>
            :
            ""
            }
            {status === 2 ? 
            <ButtonContainer>
            <Button onClick={handleContinue} title='CONTINUE'></Button>
            <Button onClick={handleReset} title='RESET'></Button>
            </ButtonContainer>
            :
            ""
            }
        </>
    )
}

export default React.memo(ButtonGroup)