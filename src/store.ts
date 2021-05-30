import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { AreasReducer } from './reducers/Areas/Areas.reducer';
import { SoilsReducer } from './reducers/Soils/Soils.reducer';
import { AreasSaga } from './sagas/Areas/Areas.saga';
import { SoilsSaga } from './sagas/Soils/Soils.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        AreasReducer,
        SoilsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(AreasSaga);
sagaMiddleware.run(SoilsSaga);

export type TStore = ReturnType<typeof store.getState>;
