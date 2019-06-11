import React from 'react';
import '../../estilo/App.css';

import Solicitacao from './solicitacao';

export default props => {
	return (
		<div className="Direita">
			<Solicitacao/>
			<Solicitacao/>
			<Solicitacao/>
			<Solicitacao/>
			<Solicitacao/>
		</div>
	);
}

