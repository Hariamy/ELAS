import React from 'react';
import '../../estilo/App.css';
import { BotaoVerde, BotaoRosa} from '../../estilo/estilos.js';


export default props => {
  return (
    <div className="FormularioUsuario">
        <div className='Formulario'>
        
            <input className='formularioLargo' type="text" 
                placeholder='Login:'
                onChange={props.mudaLoginBusca}
                value={props.name}>
            </input>
        
            <BotaoRosa onClick={props.cancelar}>CANCELAR</BotaoRosa>
            <BotaoVerde onClick={props.buscarUsuario}>CONFIRMAR</BotaoVerde>
        </div>
    </div>
    );
}

