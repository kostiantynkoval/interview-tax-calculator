import {render, screen} from "@testing-library/react";
import {TaxInputForm} from "../TaxInputForm";

const props  = {
    isLoading: false,
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    formData: {
        year: '2022',
        income: '100000'
    }
}

test('TaxInputForm renders', () => {
    render(<TaxInputForm {...props} />);
    const inputYearElement = screen.getByLabelText(/Enter Year/i)
    const inputIncomeElement = screen.getByLabelText(/Enter Income/i)
    expect(inputYearElement).toBeInTheDocument();
    expect(inputIncomeElement).toBeInTheDocument();
});