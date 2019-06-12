import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import store from './store';
import './index.css';
import App from './components/pages/App';
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import NotFound from './components/pages/NotFound'

const PrivateRoute = function({ component: Component, ...rest }) {
   return (
        <Route
            {...rest}
            render={props => {
                return store.getState().session.get('isAuthenticated') ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: {from: props.location}
                        }}
                    />
                )}
            }
        />
    );
};

const Router = (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<Provider store={store}>{Router}</Provider>, document.getElementById('root'));