import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts(state, { payload }) {
            return payload;
        },
    },
});

export const { setProducts } = productsSlice.actions;
