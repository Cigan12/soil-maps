import { TAPIGetSoilsResponse } from '../../api/SoilsAPI/SoilsAPI.util.types';

export interface ISoilsState {
    soils: TAPIGetSoilsResponse;
    isLoading: boolean;
}
