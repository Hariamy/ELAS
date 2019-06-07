import React from 'react';
import '../../../estilo/App.css';

import logo from '../icone.png';

export default props => {
  return (
    <div className="Logo-esquerda">
        <div className="Logo">
            <img src={logo} alt="asd" />
            <h1>ELAS</h1>
            <p id="Subescrito">Eletronic Library Automated System</p>
        </div>
    </div>
  );
}

