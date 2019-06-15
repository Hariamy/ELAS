import React from 'react';
//import {Router, Route, Redirect, hashHistory} from 'react-router';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { autenticacao } from '../conexaoApi/funcoesApi';

import Login from './login/login';

import Solicitar from './solicitar/solicitar';

import Emprestimo from './emprestimo/emprestimo';
import Emprestar from './emprestimo/emprestar';

import Usuario from './usuario/usuario';

import Livro from './livro/livro';

import Configurar from './configurar/configurar';

const PrivateRoute = ( { component: Component, ...rest }) => (
    <Route
        { ...rest }
        render={ props => 
            autenticacao.getStatusAut() ? (
                <Component {... props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Login }/>
            <PrivateRoute path='/solicitar' component={ Solicitar }/>
            <PrivateRoute path='/emprestimo' component={Emprestimo}/>
            <PrivateRoute path='/emprestar' component={Emprestar}/>
            <PrivateRoute path='/usuario' component={Usuario}/>
            <PrivateRoute path='/livro' component={Livro}/>
            <PrivateRoute path='/configurar' component={Configurar}/>
            <Redirect from='*' to ='/'/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
/*
export default props => (
    <Router history={hashHistory}>
        <Route path='login' component={Login}/>
        <Route path='emprestimo' component={Emprestimo}/>
        <Route path='emprestar' component={Emprestar}/>
        <Route path='usuario' component={Usuario}/>
        <Route path='livro' component={Livro}/>
        <Route path='configurar' component={Configurar}/>
        <Redirect from='*' to ='/login'/>
        
    </Router>
)
*/