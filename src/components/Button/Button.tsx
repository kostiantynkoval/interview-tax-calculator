import React, {MouseEventHandler} from 'react';
import {StyledButton} from "./Button.styled";

interface ButtonProps {
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    children: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({disabled, children, type, onClick}:ButtonProps):JSX.Element => {
    return (
        <StyledButton onClick={onClick} disabled={disabled} type={type} >{children}</StyledButton>
    );
};