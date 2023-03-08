import {SuccessResponseObject} from "../api/types";

interface TaxTableRow {
    taxBracket: string,
    taxRate: string,
    amountTaxable: string,
    taxPayable: string
}

export interface TaxTableData {
    tableData: TaxTableRow[];
    totalTaxAmount: string;
}
export const calculateMarginTax = (income: string, data: SuccessResponseObject[] | null): TaxTableData => {
    const incomeNum = parseFloat(income);
    if(data?.length && data.length > 0) {
        let totalTaxAmount = 0;
        const tableData: TaxTableRow[] = data.reduce<TaxTableRow[]>((acc, element) => {
            if(element.max && incomeNum >= element.max) {
                const taxPayable = (element.max - element.min) * element.rate
                totalTaxAmount += taxPayable
                return acc.concat({
                    taxBracket: `$${element.min} - $${element.max}`,
                    taxRate: (element.rate * 100).toFixed(2) + "%",
                    amountTaxable: (element.max - element.min).toFixed(2),
                    taxPayable: taxPayable.toFixed(2),
                })
            } else if ((element.max && incomeNum < element.max && incomeNum > element.min) || (!element.max && incomeNum > element.min)) {
                const taxPayable = (incomeNum - element.min) * element.rate
                totalTaxAmount += taxPayable
                return acc.concat({
                    taxBracket: `$${element.min}${element.max ? ` - $${element.max}` : "+"}`,
                    taxRate: (element.rate * 100).toFixed(2) + "%",
                    amountTaxable: (incomeNum - element.min).toFixed(2),
                    taxPayable: taxPayable.toFixed(2),
                })
            }
            return acc
        }, [] as any[])

        return {
            tableData,
            totalTaxAmount: totalTaxAmount.toFixed(2)
        };
    }

    return {
        tableData: [],
        totalTaxAmount: '0'
    };
}