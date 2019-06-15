import React from 'react';
import '../../estilo/App.css';
import {BotaoVerde, BotaoRosa} from '../../estilo/estilos.js'

export default props => {
	return (
		<div> 
            <div className="BotaoInserir">
                <BotaoRosa onClick={props.botaoRosa}>INSERIR</BotaoRosa>
            </div>
        
            <div className="BotaoInserir">
                <BotaoVerde onClick={props.botaoVerde}>BUSCAR</BotaoVerde>
            </div>
		</div>
	);
}

