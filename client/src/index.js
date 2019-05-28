import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
import './index.css';
import App from './components/App';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import NotFound from './components/NotFound'

const Router = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(Router, document.getElementById('root'));