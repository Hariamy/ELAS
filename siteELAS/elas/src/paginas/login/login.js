import React from 'react';
import '../../estilo/App.css';


import Formulario from './components/formulario';
import Logo from './components/logo';


export default props => {
  return (
	<div className="Inicio">
		<Logo/>
		<Formulario/>
	</div>
  );
}

