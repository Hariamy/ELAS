import React from 'react';
import '../../estilo/App.css';

import logo from '../../imagem/icone.png';

export default props => {
  return (
    <div className="Logo-esquerda">
        <div className="Logo">
            <img src={logo} alt="Logo" />
            <h1>ELAS</h1>
            <p id="Subescrito">Eletronic Library Automated System</p>
        </div>
    </div>
  );
}

