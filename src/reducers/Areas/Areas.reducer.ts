import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAPIGetAreasResponse } from '../../api/AreaAPI/AreaAPI.util.types';
import { IAreasState } from './Areas.reducer.types';

const initialState: IAreasState = {
    areas: [],
    isLoading: false,
};

const AreasSlice = createSlice({
    name: 'Areas',
    initialState,
    reducers: {
        fetchAreasAction(state) {
            state.isLoading = true;
        },
        fetchAreasSuccedAction(
            state,
            action: PayloadAction<TAPIGetAreasResponse>
        ) {
            state.areas = action.payload;
            state.isLoading = false;
        },
    },
});

export const AreasReducer = AreasSlice.reducer;
export const { fetchAreasAction, fetchAreasSuccedAction } = AreasSlice.actions;
