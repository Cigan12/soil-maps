import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MapPage } from './pages/Map/Map.page';
import { AdminPage } from './pages/Admin/Admin.page';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import { fetchAreasAction } from './reducers/Areas/Areas.reducer';
import { AdminSoilsPage } from './pages/Admin/AdminSoils.page';

const UnderRedux: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAreasAction());
    }, [dispatch]);
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <MapPage />
                    </Route>
                    <Route path="/admin" exact>
                        <AdminPage />
                    </Route>
                    <Route path="/admin/soils">
                        <AdminSoilsPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            <UnderRedux />
        </Provider>
    );
};
