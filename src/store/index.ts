import { combineReducers, createStore } from 'redux';
import { productsSlice } from './slices/productsSlice';
import { userSlice } from './slices/userSlice';

const app = combineReducers({
    user: userSlice.reducer,
    products: productsSlice.reducer,
});

export type RootState = ReturnType<typeof app>;

const store = createStore(
    app,
);

export default store;
