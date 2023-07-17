import React from 'react';

import { MainButton } from './ButtonStyle';

interface ButtonProps {
    onClick:() => void;
    title: string;
}

const Button: React.FC<ButtonProps> = ({onClick, title}) => {
    return(
        <MainButton onClick={onClick}>{title}</MainButton>
    )
}

export default Button;