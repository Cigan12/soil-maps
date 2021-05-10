import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MapPage } from './pages/Map/Map.page';
import { AdminPage } from './pages/Admin/Admin.page';

export const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <MapPage />
                    </Route>
                    <Route path="/admin">
                        <AdminPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
