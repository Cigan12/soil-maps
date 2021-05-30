import { call, ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { APIGetAreas } from '../../api/AreaAPI/AreaAPI.util';
import { TAPIGetAreasResponse } from '../../api/AreaAPI/AreaAPI.util.types';
import {
    fetchAreasAction,
    fetchAreasSuccedAction,
} from '../../reducers/Areas/Areas.reducer';

function* getAreas() {
    try {
        const data: TAPIGetAreasResponse = yield call(APIGetAreas);
        yield put(fetchAreasSuccedAction(data));
    } catch (error) {
        console.log(
            '🚀 ~ file: Areas.saga.ts ~ line 11 ~ function*getAreas ~ error',
            error
        );
    }
}

export function* AreasSaga(): Generator<ForkEffect<never>> {
    yield takeEvery(fetchAreasAction.type, getAreas);
}
