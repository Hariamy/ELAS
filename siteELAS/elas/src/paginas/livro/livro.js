import React from 'react';
import '../../estilo/App.css';

import Barra from '../barra'
import Busca from '../usuario/busca';

export default props => {
	return (
		<div className="Inicio">
			<Barra aba="livro"/>
			<div className="Direita">
				<div className="PainelUsuario">
					<h1 className="TituloUsuario">LIVRO</h1>
					<Busca />
				</div>
			</div>
		</div>
	);
}

