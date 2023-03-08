import React, {FormEvent, SyntheticEvent, useState, useEffect} from 'react';
import { TaxInputForm, FormData } from "../TaxInputForm";
import { TaxResultTable } from "../TaxResultTable";
import { Notification } from "../Notification";
import {useQuery} from "../../hooks/useQuery";
import {calculateMarginTax, TaxTableData} from "../../utils/calculateMarginTax";
import {StyledMain} from "./App.styled";


export const App = () => {
    const {data, isLoading, error, reFetch} = useQuery();
    const [isNotificationOpen, setIsNotificationOpen] = useState(false)
    const [taxResultTableData, setTaxResultTableData] = useState<TaxTableData | null>(null);
    const [formData, setFormData] = useState<FormData>({
        income: '',
        year: ''
    })

    useEffect(() => {
        setTaxResultTableData(calculateMarginTax(formData.income, data))
    }, [data])

    useEffect(() => {
        if (error?.message) {
            setIsNotificationOpen(true)
        }
    }, [error])

    const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    const onFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await reFetch(formData.year)
    }

    return (
    <StyledMain>
        <TaxInputForm isLoading={isLoading} onSubmit={onFormSubmit} onChange={onInputChange} formData={formData} />
        <TaxResultTable taxResultTableData={taxResultTableData} income={formData.income}/>
        <Notification data-testid="Notification-Loader" onClose={() => setIsNotificationOpen(false)} isOpen={isNotificationOpen || isLoading} message={error?.message} />
    </StyledMain>
  )
}
