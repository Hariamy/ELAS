import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import Login from './login/login';
import Solicitar from './solicitar/solicitar';
import Emprestimo from './emprestimo/emprestimo';
import Usuario from './usuario/usuario';
import Livro from './livro/livro';
import Configurar from './configurar/configurar';


export default props => (
    <Router history={hashHistory}>
        <Route path='login' component={Login}/>
        <Route path='solicitar' component={Solicitar}/>
        <Route path='emprestimo' component={Emprestimo}/>
        <Route path='usuario' component={Usuario}/>
        <Route path='livro' component={Livro}/>
        <Route path='configurar' component={Configurar}/>
        <Redirect from='*' to ='/login'/>
    </Router>
)