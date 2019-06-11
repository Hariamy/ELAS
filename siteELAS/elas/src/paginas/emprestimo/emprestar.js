
import React from 'react';
import '../../estilo/App.css';

import {BotaoInicia, BotaoRosa, BotaoVerde} from '../../estilo/estilos.js';
import Barra from '../barra'
export default props => {
	return (
		<div className="Inicio">
			<Barra aba="emprestimo"/>
			<div className="Direita">
				<div className="Emprestar">
			   
					<div className="InfoSol">
						<p className="Informacoes">Usuário: &nbsp;</p>
							<p> Hariamy</p>
						<p className="Informacoes">Pendências: &nbsp;</p>
							<p>Nenhuma</p>
						<p className="Informacoes">Títulos Solicitados: &nbsp;</p>
							<p>Construção e análise de algoritmos</p>
					</div>

					<div className="ConfirmarSol">
						<form onSubmit={props.handleSubmit}>

							<input id='nome' type="text" 
								placeholder='Código:'
								onChange={props.handleChangeName}
								value={props.name}></input>
							
							<div className="BotaoConfirmar">
								<BotaoRosa type="submit" value="Submit">ADICIONAR</BotaoRosa>
							</div>
							<hr />
						</form>
						
					</div>
					<div className="BotaoConfirmar">
							   <BotaoVerde type="submit" value="Submit">CONFIRMAR</BotaoVerde>
					</div>
				</div>
			</div>
		</div>
		
	);
}

