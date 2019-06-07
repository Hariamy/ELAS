import React from 'react';
import '../../estilo/App.css';

import logo from './iconeb.png';

export default props => {
	return (
		<div className="Barra-Lateral">
			<div className="Logo-so">
				<img id="Logo-Solicitar" src={logo} alt="asd" />
				<h1>ELAS</h1>
				<p id="Subescrito-Solicitar">Eletronic Library Automated System</p>
			</div>
		</div>
	);
}

