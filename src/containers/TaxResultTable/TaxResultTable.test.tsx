import React from 'react';
import { render, screen } from '@testing-library/react';
import { TaxResultTable } from '.';

test('renders learn react link', () => {
    render(<TaxResultTable income="" taxResultTableData={{tableData: [], totalTaxAmount: '0'}} />);
    const tableElement = screen.getByText(/Tax Bracket/i)
    expect(tableElement).toBeInTheDocument();
});