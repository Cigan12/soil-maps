import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAPIGetSoilsResponse } from '../../api/SoilsAPI/SoilsAPI.util.types';
import { ISoilsState } from './Soils.reducer.types';

const initialState: ISoilsState = {
    isLoading: false,
    soils: [],
};

const SoilsSlice = createSlice({
    name: 'Soils',
    initialState,
    reducers: {
        fetchSoilsAction(state) {
            state.isLoading = true;
        },
        fetchSoilsSuccedAction(
            state,
            action: PayloadAction<TAPIGetSoilsResponse>
        ) {
            state.soils = action.payload;
            state.isLoading = false;
        },
    },
});

export const SoilsReducer = SoilsSlice.reducer;
export const { fetchSoilsAction, fetchSoilsSuccedAction } = SoilsSlice.actions;
