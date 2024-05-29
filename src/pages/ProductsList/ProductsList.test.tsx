import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import { ProductsList } from "./ProductsList";

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}))

describe('test', () => {
    beforeEach(() => {
        (useSelector as unknown as jest.Mock).mockImplementation((callback) => {
            callback({
                products: [
                    {
                        id: 1,
                        title: 'Title',
                        description: 'Description',
                        thumbnail: 'thumb.com',
                    }
                ],
            });
        });
    });
    it('should display', () => {
        render(<ProductsList />);

        expect(screen.getByText('Title')).toBeVisible();
    });
});