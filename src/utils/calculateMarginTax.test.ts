import {calculateMarginTax} from "./calculateMarginTax";

const outputDefault =  {tableData: [], totalTaxAmount: "0"}

const mockRates = [
    {max: 49020, min: 0, rate: 0.15},
    {max: 98040, min: 49020, rate: 0.205},
    {max: 151978, min: 98040, rate: 0.26},
    {max: 216511, min: 151978, rate: 0.29},
    {min: 216511, rate: 0.33}
]
const mockIncome = '139444';

const mockTableData = {
    tableData: [
        {taxBracket: '$0 - $49020', taxRate: '15.00%', amountTaxable: '49020.00', taxPayable: '7353.00'},
        {taxBracket: '$49020 - $98040', taxRate: '20.50%', amountTaxable: '49020.00', taxPayable: '10049.10'},
        {taxBracket: '$98040 - $151978', taxRate: '26.00%', amountTaxable: '41404.00', taxPayable: '10765.04'}
    ],
    totalTaxAmount: "28167.14"
}

describe('calculateMarginTax', () => {
    test('no data returns default', () => {
        expect(calculateMarginTax(mockIncome, [])).toStrictEqual(outputDefault)
    })
    test('returns correct data', () => {
        expect(calculateMarginTax(mockIncome, mockRates)).toStrictEqual(mockTableData)
    })
})