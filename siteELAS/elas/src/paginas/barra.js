import React from 'react';
import '../estilo/App.css';

import logo from '../imagem/icone.png';

export default props => {
	var solicitar = props.aba === "solicitar" ? "alinha-menu colorido" : "alinha-menu";
	var emprestimo = props.aba === "emprestimo" ? "alinha-menu colorido" : "alinha-menu";
	var usuario = props.aba === "usuario" ? "alinha-menu colorido" : "alinha-menu";
	var livro = props.aba === "livro" ? "alinha-menu colorido" : "alinha-menu";
	var configurar = props.aba === "configurar" ? "alinha-menu colorido" : "alinha-menu";

	return (
		<div className="Barra-Lateral">
			<div className="menu config-top">
				<img className="Logo-Solicitar" src={logo} alt="Logo" />
				<h1>ELAS</h1>
				<p id="Subescrito-Solicitar">Eletronic Library Automated System</p>
				
			</div>
			<div className="lista config-top">
				<a href='#/solicitar'>	<div className={solicitar}>Empréstimos Solicitados</div></a>
				<a href='#/emprestimo'>	<div className={emprestimo}>Novo Empréstimo</div></a>
				<a href='#/usuario'>	<div className={usuario}>Usuários</div></a>
				<a href='#/livro'>		<div className={livro}>Livros</div></a>
				<a href='#/configurar'>	<div className={configurar}>Configurações</div></a>
			</div>
			
		</div>
	);
}

