import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import Login from './login/login';
import Solicitar from './solicitar/solicitar';


export default props => (
    <Router history={hashHistory}>
        <Route path='login' component={Login}/>
        <Route path='solicitar' component={Solicitar}/>

        <Redirect from='*' to ='/login'/>
    </Router>
)