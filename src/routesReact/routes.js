import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// ==================
//      Components
// ==================
import HomePage from '../components/Home'
import Login from '../components/Login/Login'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes;