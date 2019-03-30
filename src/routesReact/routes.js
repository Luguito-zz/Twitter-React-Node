import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// ==================
//      Components
// ==================
import HomePage from '../components/Home'
import myProfile from '../components/myProfile'
import Login from '../components/Login'


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/profile" component={myProfile} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes;