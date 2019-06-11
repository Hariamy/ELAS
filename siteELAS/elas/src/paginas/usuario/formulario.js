import React from 'react';
import '../../estilo/App.css';
import {BotaoInicial} from '../../estilo/estilos.js';


export default props => {
  return (
    <div className="Logo-direita">
        <div className="Login">
            <div className='Formulario'>
                <form onSubmit={props.handleSubmit}>

                    <input id='nome' type="text" 
                        placeholder='Nome:'
                        onChange={props.handleChangeName}
                        value={props.name}></input>
                    
                    <input id='senha' type="password"
                        placeholder='Senha:'
                        onChange={props.handleChangeSenha}
                        value={props.senha}></input>
                
                    <BotaoInicial type="submit" value="Submit">ENTRAR</BotaoInicial>
                    <hr />
                </form>

            </div>
        </div>

    </div>
  );
}
