import { createSlice } from '@reduxjs/toolkit';
import { fetchRoasters } from '../thunks/fetchRoasters';

const roastersSlice = createSlice({
    name: 'roasters',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(fetchRoasters.pending, (state, action) => {
            state.isLoad = true;
        });
        builder.addCase(fetchRoasters.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchRoasters.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const roastersReducer = roastersSlice.reducer;