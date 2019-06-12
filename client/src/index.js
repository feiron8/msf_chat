import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import App from './components/pages/App';
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import NotFound from './components/pages/NotFound'

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

ReactDOM.render(<Provider store={store}>{Router}</Provider>, document.getElementById('root'));