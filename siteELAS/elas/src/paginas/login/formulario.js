import React from 'react';
import '../../estilo/App.css';
import {BotaoInicial} from '../../estilo/estilos.js';

export default props => {
  return (
    <div className="Logo-direita">
        <div className="Login">
            <div className='Formulario'>
                <input id='nome' type="text" 
                    placeholder='Login:'
                    onChange={props.mudaUsuario}
                    value={props.usuario}></input>
                
                <input id='senha' type="password"
                    placeholder='Senha:'
                    onChange={props.mudaSenha}
                    value={props.senha}></input>
            
                <BotaoInicial onClick={props.loginSubmit}>ENTRAR</BotaoInicial>
            
            </div>
        </div>

    </div>
  );
}

