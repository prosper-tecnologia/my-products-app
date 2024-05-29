import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { ModalTemplates } from "@src/enums/ModalTemplates";
import { useModal } from "@src/hooks";
import { api } from "@src/services";
import { RootState } from "@src/store";
import { setProducts } from "@src/store/slices/productsSlice";
import { Product } from "@src/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function ProductView() {
    const params = useParams();
    const dispatch = useDispatch();
    const products: Product[] = useSelector((state: RootState) => state.products);

    const [loading, setLoading] = useState(false);

    const { show, setTemplate } = useModal();

    const product = useMemo(() => {
        return products.find(({ id }) => id === Number(params.id));
    }, [products]);

    useEffect(() => {
        if (!products.length) {
            setLoading(true);
            api.get('/products')
                .then(({ data }) => {
                    dispatch(setProducts(data.products));
                    setLoading(false);
                })
                .catch((e) => console.error(e));
        }
    }, [products]);

    const openModal = useCallback(() => {
        setTemplate(ModalTemplates.ImagesCarousel);
        show(product);
    }, [show, setTemplate]);

    return (
        <Box>
            {loading ? (
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        width: '100%',
                    }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <Box flex="1" minWidth="350px">
                            <img src={product?.thumbnail} style={{ width: '100%' }}/>
                        </Box>
                        <Box flex="1"  minWidth="350px">
                            <Typography variant="h4">{product?.title}</Typography>
                            <Typography>{product?.description}</Typography>
                            <Button onClick={openModal}>Ver detalhes</Button>
                        </Box>
                    </Box>
            )}
        </Box>
    );
}