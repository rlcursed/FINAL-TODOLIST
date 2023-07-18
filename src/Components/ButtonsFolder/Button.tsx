import React, {FC,memo}  from 'react';

import { MainButton } from './ButtonStyle';

interface ButtonProps {
    onClick:() => void;
    title: string;
}

const Button: FC<ButtonProps> = ({onClick, title}) => {
    return(
        <MainButton onClick={onClick}>{title}</MainButton>
    )
}

export default memo(Button);