import { AxiosResponse } from 'axios';
import { API } from '../BaseAPI.util';
import { IAPIPostCreateAreaResponse } from './AreaAPI.util.types';

export const APIPostCreateArea = async (body: FormData) => {
    const r: AxiosResponse<IAPIPostCreateAreaResponse> = await API.post(
        'areas/create-area',
        body
    );
    return r.data;
};
