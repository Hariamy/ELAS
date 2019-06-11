import React from 'react';
import '../../estilo/App.css';

import Barra from '../barra';
import Formulario from '../login/formulario'

export default props => {
	return (
		<div className="Inicio">
			<Barra aba="emprestimo"/>
			<div className="Direita">
				<Formulario/>
            </div>
		</div>
	);
}

