import { createSlice } from '@reduxjs/toolkit';
import { fetchRoasters } from '../thunks/fetchRoasters';
import { addRoaster } from '../thunks/addRoaster';
import { removeRoaster } from '../thunks/removeRoaster';

const roastersSlice = createSlice({
    name: 'roasters',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {

        // Fetch Roaster
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

        // Add Roaster
        builder.addCase(addRoaster.pending, (state, action) => {
            state.isLoad = true;
        });
        builder.addCase(addRoaster.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addRoaster.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        // Remove Roaster
        builder.addCase(removeRoaster.pending, (state, action) => {
            state.isLoad = true;
        });
        builder.addCase(removeRoaster.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(roaster => {
                return roaster.id !== action.payload.id;
            });
        });
        builder.addCase(removeRoaster.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const roastersReducer = roastersSlice.reducer;