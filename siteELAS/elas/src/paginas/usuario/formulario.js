import React from 'react';
import '../../estilo/App.css';
import { BotaoVerde, BotaoRosa} from '../../estilo/estilos.js';


export default props => {
  return (
    <div className="FormularioUsuario">
        <div className='Formul ario'>
        
            <input className='formularioLargo' type="text" 
                placeholder='Nome:'
                onChange={props.mudaNome}
                value={props.nome}>
            </input>

            <input className='formularioLargo' type="text" 
                placeholder='Endereço:'
                onChange={props.mudaEndereco}
                value={props.rua}>
            </input>

            <input className='formularioCurto' type="text" 
                placeholder='Número:'
                onChange={props.mudaNumero}
                value={props.numero}>
            </input>

            <input className='formularioCurto' type="text" 
                placeholder='CEP:'
                onChange={props.mudaCep}
                value={props.cep}>
            </input>

            <input className='formularioLargo' type="text" 
                placeholder='Telefone:'
                onChange={props.mudaTelefone}
                value={props.telefone}>
            </input>

            <input className='formularioCurto' type="text" 
                placeholder='Login:'
                onChange={props.mudaLogin}
                value={props.login}>
            </input>
            
            <input className='formularioCurto' type="password"
                placeholder='Senha:'
                onChange={props.mudaSenha}
                value={props.senha}></input>
        
            <BotaoRosa onClick={props.cancelar}>{props.rosa}</BotaoRosa>
            <BotaoVerde onClick={props.inserirUsuario}>{props.verde}</BotaoVerde>
        </div>
    </div>
    );
}

