import React from 'react';
import '../../estilo/App.css';
import {BotaoVerde, BotaoRosa} from '../../estilo/estilos.js'

export default props => {
	return (
		<div className="Solicitacao">
           
            <div className="Info">
                <p className="Informacoes">Usuário: &nbsp;</p>
                    <p> Hariamy</p>
                <p className="Informacoes">Pendências: &nbsp;</p>
                    <p>Nenhuma</p>
                <p className="Informacoes">Títulos Solicitados: &nbsp;</p>
                    <p>Construção e análise de algoritmos</p>
            </div>

            <div className="Confirmar">
                <div className="BotaoConfirmar">
                   <BotaoVerde type="submit" value="Submit">CONFIRMAR</BotaoVerde>
                </div>
                <div className="BotaoConfirmar">
                    <BotaoRosa type="submit" value="Submit">GUICHÊ</BotaoRosa>
                </div>
            </div>
		</div>
	);
}

