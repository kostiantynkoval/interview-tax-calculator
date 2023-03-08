import React, {SyntheticEvent} from 'react';
import {StyledInputH4, StyledInputLabel, StyledInput} from "./Input.styled";

interface InputProps {
    value: string;
    onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
    type: "text";
    name: string;
    pattern: string;
    label: string;
    required?: boolean;

}
export const Input = ({label, ...props}: InputProps): JSX.Element => (
    <StyledInputLabel>
        <StyledInputH4>{label}</StyledInputH4>
        <StyledInput {...props} type="text" />
    </StyledInputLabel>
);