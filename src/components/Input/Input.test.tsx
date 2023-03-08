import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '.';

const onChange = jest.fn()

test('renders learn react link', () => {
    render(<Input label="Enter Income" value="1992" pattern="^1992$" onChange={onChange} name="year" type="text" />);
    const linkElement = screen.getByLabelText(/Enter Income/i);
    expect(linkElement).toBeInTheDocument();
});