import React from 'react';
import '../../estilo/App.css';

import Barra from '../barra';
import Busca from './busca';

export default props => {
	return (
		<div className="Inicio">
			<Barra aba="usuario"/>
			<div className="Direita">
				<div className="PainelUsuario">
					<h1 className="TituloUsuario">USUÁRIO</h1>
					<Busca />
				</div>
			</div>
		</div>
	);
}

