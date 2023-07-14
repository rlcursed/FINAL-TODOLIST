import React from 'react';
import AppLogic from './AppLogic';
import ButtonGroup from './ButtonsFolder/ButtonGroup';
import { TimerGlobalContainer } from './TimerContainerStyle';
import Display from './DisplayFolder/Display';

const TimerContainer = () => {
    const {
        updatedM,
        updatedS,
        updatedMs,
        status,
        handleStart,
        handlePause,
        handleContinue,
        handleReset
    } = AppLogic();

    return (
        <TimerGlobalContainer>
            <Display
            minutes={updatedM}
            seconds={updatedS}
            mseconds={updatedMs}
            />
            <ButtonGroup
            status={status}
            handleStart={handleStart}
            handlePause={handlePause}
            handleContinue={handleContinue}
            handleReset={handleReset}

            />
        </TimerGlobalContainer>
    )
}

export default TimerContainer;