import { configureStore } from '@reduxjs/toolkit';
import { roastersReducer } from './slices/roastersSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { coffeesApi } from './apis/CoffeesAPI';


export const store = configureStore({
    reducer: {
        roasters: roastersReducer,
        [coffeesApi.reducerPath]: coffeesApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(coffeesApi.middleware);
    }
});

setupListeners(store.dispatch);

export * from './thunks/fetchRoasters';
export * from './thunks/addRoaster';
export * from './thunks/removeRoaster';
export { useFetchCoffeesQuery } from './apis/CoffeesAPI';