import { fireEvent, render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from './';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Teste', () => {
    it('test', () => {
        const mockNavigate = jest.fn();
        (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);
        render(<ProductCard title="test" description="hello" thumbnail="test.svg" id={2} />);
        fireEvent.click(screen.getByText('Ver mais'));

        expect(mockNavigate).toHaveBeenCalled();

        expect(screen.getByText('hello')).toBeVisible();
    })
})