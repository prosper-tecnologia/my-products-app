// import { fireEvent, render, screen } from "@testing-library/react";
// import { useNavigate } from "react-router-dom";
// import { ProductCard } from "./ProductCard";

// jest.mock('react-router-dom', () => ({
//     useNavigate: jest.fn(),
// }));

// describe('Product Card', () => {
//     it('should render title and description', () => {
//         render(<ProductCard
//             id={1}
//             title="Produto"
//             description="Descrição do produto"
//             thumbnail="imagem.com"
//         />);

//         expect(screen.getByText('Produto')).toBeVisible();
//         expect(screen.getByText('Descrição do produto')).toBeVisible();
//     });

//     it('should invoke navigation on click', () => {
//         const mockNavigation = jest.fn();
//         (useNavigate as jest.Mock).mockImplementation(() => mockNavigation);

//         render(<ProductCard
//             id={1}
//             title="Produto"
//             description="Descrição do produto"
//             thumbnail="imagem.com"
//         />);

//         fireEvent.click(screen.getByText('Ver mais'));

//         expect(mockNavigation).toHaveBeenCalledWith('/auth/products/1');
//     });
// });

export { };
