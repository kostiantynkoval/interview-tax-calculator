import React, {Fragment} from 'react';
import { TaxTableData} from "../../utils/calculateMarginTax";
import { TaxResultTableStyled, TaxResultTableHeaderStyled, TaxResultTableCellStyled, TaxResultTableCellTitleStyled, TaxResultTableContainerStyled } from "./TaxResultTable.styled";

interface TaxResultTableProps {
    taxResultTableData: TaxTableData | null;
    income: string
}

export const TaxResultTable = ({taxResultTableData, income}: TaxResultTableProps) => {
    return (
        <TaxResultTableContainerStyled>
            <TaxResultTableStyled>
                <TaxResultTableHeaderStyled>Tax Bracket</TaxResultTableHeaderStyled>
                <TaxResultTableHeaderStyled>Marginal Tax Rate</TaxResultTableHeaderStyled>
                <TaxResultTableHeaderStyled>Amount Taxable</TaxResultTableHeaderStyled>
                <TaxResultTableHeaderStyled>Tax Payable</TaxResultTableHeaderStyled>
                {
                    taxResultTableData?.tableData.map(row => (
                        <Fragment key={row.taxBracket}>
                            <TaxResultTableCellTitleStyled>{row.taxBracket}</TaxResultTableCellTitleStyled>
                            <TaxResultTableCellStyled>{row.taxRate}</TaxResultTableCellStyled>
                            <TaxResultTableCellStyled>${row.amountTaxable}</TaxResultTableCellStyled>
                            <TaxResultTableCellStyled>${row.taxPayable}</TaxResultTableCellStyled>
                        </Fragment>
                    ))
                }
                <div></div>
                <TaxResultTableHeaderStyled>Total</TaxResultTableHeaderStyled>
                <TaxResultTableHeaderStyled>${income}</TaxResultTableHeaderStyled>
                <TaxResultTableHeaderStyled>${taxResultTableData?.totalTaxAmount}</TaxResultTableHeaderStyled>
            </TaxResultTableStyled>
        </TaxResultTableContainerStyled>
    );
};