import { TAPIGetAreasResponse } from '../../api/AreaAPI/AreaAPI.util.types';

export interface IAreasState {
    areas: TAPIGetAreasResponse;
    isLoading: boolean;
}
