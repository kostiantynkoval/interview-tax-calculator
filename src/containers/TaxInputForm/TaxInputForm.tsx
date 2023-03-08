import React, {FormEvent, SyntheticEvent} from 'react';
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {StyledTaxInputForm} from './TaxInputForm.styled';

export interface FormData {
    income: string;
    year: string;
}
interface TaxInputFormProps {
    isLoading: boolean;
    onSubmit: (e: FormEvent) => Promise<void>;
    onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
    formData: FormData
}

export const TaxInputForm = ({isLoading, onSubmit, formData, onChange}: TaxInputFormProps): JSX.Element => (
    <StyledTaxInputForm onSubmit={onSubmit}>
        <Input
            label="Enter Year"
            value={formData.year}
            name="year"
            onChange={onChange}
            pattern='^20[1-2][0-9]$'
            type="text"
        />
        <Input
            label="Enter Income"
            value={formData.income}
            name="income"
            onChange={onChange}
            pattern="^[0-9]*(\.[0-9][0-9]?)?$"
            type="text"
            required={true}
        />
        <Button disabled={isLoading} type="submit" >Submit</Button>
    </StyledTaxInputForm>
);