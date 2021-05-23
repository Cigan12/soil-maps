import { AxiosResponse } from 'axios';
import { API } from '../BaseAPI.util';
import {
    IAPIPostCreateAreaResponse,
    TAPIGetAreasResponse,
} from './AreaAPI.util.types';

export const APIPostCreateArea = async (body: FormData) => {
    const r: AxiosResponse<IAPIPostCreateAreaResponse> = await API.post(
        'areas/create-area',
        body
    );
    return r.data;
};

export const APIGetAreas = async () => {
    const r: AxiosResponse<TAPIGetAreasResponse> = await API.get('areas');
    return r.data;
};
