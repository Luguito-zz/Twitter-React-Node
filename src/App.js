import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import AppRoutes from './routesReact/routes';

class App extends Component {   
    render() {
        return (
            <div>
                <AppRoutes/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))