import { AxiosResponse } from 'axios';
import { API } from '../BaseAPI.util';
import {
    IAPIPostCreateSoilResponse,
    TAPIGetSoilsResponse,
} from './SoilsAPI.util.types';

export const APIPostCreateSoil = async (body: FormData) => {
    const r: AxiosResponse<IAPIPostCreateSoilResponse> = await API.post(
        'soils/create-soil',
        body
    );
    return r;
};

export const APIGetSoils = async () => {
    const r: AxiosResponse<TAPIGetSoilsResponse> = await API.get('soils');
    return r.data;
};

export const APIDeleteSoil = async (id: number) => {
    const r: AxiosResponse = await API.delete(`soils/${id}`);
    return r;
};
