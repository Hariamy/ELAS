import React from 'react';
import '../../estilo/App.css';
import {BotaoVerde, BotaoRosa} from '../../estilo/estilos.js'

export default props => {
	return (
		<div className="Solicitacao">
           
            <div className="Info">
                <p className="Informacoes">Usuário: &nbsp;</p>
                    <p> {props.nome}</p>
                <p className="Informacoes">Pendências: &nbsp;</p>
                    <p>{props.pendencias}</p>
                <p className="Informacoes">Títulos Solicitados: &nbsp;</p>
                    <p>{props.titulo}</p>
            </div>

            <div className="Confirmar">
                <div className="BotaoConfirmar">
                   <BotaoVerde >CONFIRMAR</BotaoVerde>
                </div>
                <div className="BotaoConfirmar">
                    <BotaoRosa >GUICHÊ</BotaoRosa>
                </div>
            </div>
		</div>
	);
}

