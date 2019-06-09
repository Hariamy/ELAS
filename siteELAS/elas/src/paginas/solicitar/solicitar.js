import React from 'react';
import '../../estilo/App.css';

import Barra from '../barra'
import Solicitacoes from './solicitacoes'

export default props => {
	return (
		<div className="Geral">
			<Barra aba="solicitar"/>
			<Solicitacoes />
		</div>
	);
}

