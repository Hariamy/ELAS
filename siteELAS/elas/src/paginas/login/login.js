import React from 'react';
import '../../estilo/App.css';


import Formulario from './formulario';
import Logo from './logo';


export default props => {
  return (
	<div className="Inicio">
		<Logo/>
		<Formulario/>
	</div>
  );
}

