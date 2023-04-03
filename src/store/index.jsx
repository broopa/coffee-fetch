import { configureStore } from '@reduxjs/toolkit';
import { roastersReducer } from './slices/roastersSlice';


export const store = configureStore({
    reducer: {
        roasters: roastersReducer,
    },
});

export * from './thunks/fetchRoasters';