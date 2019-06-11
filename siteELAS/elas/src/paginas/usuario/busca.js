import React from 'react';
import '../../estilo/App.css';
import {BotaoVerde, BotaoRosa} from '../../estilo/estilos.js'

export default props => {
	return (
		<div> 
            <div className="BotaoInserir">
                <BotaoRosa type="submit" value="Submit">INSERIR</BotaoRosa>
            </div>
        
            <div className="BotaoInserir">
                <BotaoVerde type="submit" value="Submit">BUSCAR</BotaoVerde>
            </div>
		</div>
	);
}

