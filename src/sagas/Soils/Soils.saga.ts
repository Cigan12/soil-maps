import { call, ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { APIGetSoils } from '../../api/SoilsAPI/SoilsAPI.util';
import { TAPIGetSoilsResponse } from '../../api/SoilsAPI/SoilsAPI.util.types';
import {
    fetchSoilsAction,
    fetchSoilsSuccedAction,
} from '../../reducers/Soils/Soils.reducer';

function* getSoils() {
    try {
        const data: TAPIGetSoilsResponse = yield call(APIGetSoils);
        yield put(fetchSoilsSuccedAction(data));
    } catch (error) {
        console.log(
            '🚀 ~ file: Soils.saga.ts ~ line 11 ~ function*getSoils ~ error',
            error
        );
    }
}

export function* SoilsSaga(): Generator<ForkEffect<never>> {
    yield takeEvery(fetchSoilsAction.type, getSoils);
}
