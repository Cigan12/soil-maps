import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { AreasReducer } from './reducers/Areas/Areas.reducer';
import { AreasSaga } from './sagas/Areas/Areas.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        AreasReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(AreasSaga);

export type TStore = ReturnType<typeof store.getState>;
