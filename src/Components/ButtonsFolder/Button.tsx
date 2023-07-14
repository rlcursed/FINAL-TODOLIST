import React from "react";
import { ButtonStyle } from "./ButtonStyle";

interface ButtonsProps {
    onClick:() => void;
    title: string;
}

const Button: React.FC<ButtonsProps> = ({onClick, title}) => {
    return (
        <ButtonStyle onClick={onClick}>{title}</ButtonStyle>
    )
}

export default React.memo(Button);