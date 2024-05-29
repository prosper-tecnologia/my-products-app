import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        saveUser: (state, { payload }) => {
            return payload;
        },
    },
});

export const { saveUser } = userSlice.actions;
