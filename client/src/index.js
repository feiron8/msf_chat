import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import SignIn from './SignIn'
import NotFound from './NotFound'

const Router = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(Router, document.getElementById('root'));