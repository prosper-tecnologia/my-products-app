import { Box } from "@mui/material";
import { ProductCard } from "@src/components";
import { api } from "@src/services";
import { RootState } from "@src/store";
import { setProducts } from "@src/store/slices/productsSlice";
import { Product } from "@src/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function ProductsList() {
    const dispatch = useDispatch();
    const products: Product[] = useSelector((state: RootState) => state.products);

    useEffect(() => {
        api.get('/products')
            .then(({ data }) => {
                dispatch(setProducts(data.products));
            })
            .catch((e) => console.error(e));
    }, []);

    return (
        <Box display="flex" flexWrap="wrap" justifyContent="center">
            {products.map(({ id, title, description, thumbnail }) => {
                return <ProductCard
                    id={id}
                    key={`product-${id}`}
                    title={title}
                    description={description}
                    thumbnail={thumbnail}
                />;
            })}
        </Box>
    );
}
