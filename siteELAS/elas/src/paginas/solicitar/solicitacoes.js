import React, { Component } from 'react';
import '../../estilo/App.css';
import { getSolicitacao, getLivro, getUser } from '../../conexaoApi/funcoesApi'

import Solicitacao from './solicitacao';

class Solicitacoes extends Component{
	state = {
		resposta: [],
		livro: [],
		usuario: [],
		total: 0,
		leu: false,
		varios: []
	};
	
	async componentDidMount() {
		
		const consulta = await this.getSolicitacoes()
		let page = 2;
		let elementos = consulta.total
		if(consulta !== null) {
			this.setState({
				resposta: consulta.docs,
				total: consulta.total,
				livro: this.state.livro,
				usuario: this.state.usuario,
				leu: this.state.leu,
				varios: this.state.varios,
			})
			
			for (let i = 0; i < this.state.total; i++){

				const livro = await this.getLivro(this.state.resposta[i].solicitado[0])
				const usuario = await this.getLogin(this.state.resposta[i].login)
				

				this.setState({
					resposta: this.state.resposta,
					livro: [...this.state.livro, livro],
					usuario: [...this.state.usuario, usuario],
					total: this.state.total,
					leu: this.state.leu,
					varios: this.state.varios,
				})
			
			}
			
			this.preenche()

			/* 
			while (elementos > 0) {
				this.setState({
					resposta: [...this.state.resposta, ...consulta.docs],
					total: consulta.total += this.state.total
				})
				
				consulta = this.getSolicitacoes(page);
				page += 1;
			}
		} else {
			console.log("Ih rapa ta null")
			
			*/
		}
	}

	getSolicitacoes = async (pagina = 1) => {
		const response = await fetch(getSolicitacao+pagina);

		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	};

	getLivro = async (id) => {
		const response = await fetch(getLivro+id);

		const body = await response.json();

		return body;
	}

	getLogin = async (login) => {
		const response = await fetch(getUser+login);
		const body = await response.json();
		return body;
	}

	preenche = async () => {
		let varios = [];
		for (let i = 0; i < await this.state.total; i++){
			const sol = await this.state.resposta[i];
			const liv = await this.state.livro[i];
			const usuario = await this.state.usuario[i];
			
			varios.push(<Solicitacao key={sol._id} nome={usuario.nome} pendencias={"nenhuma"} titulo={liv.titulo}/>)
		}
		
		this.setState({
			resposta: this.state.resposta,
			leu: true,
			total: this.state.total,
			livro: this.state.livro,
			usuario: this.state.usuario,
			varios: varios,
		})
		
	}

	render() {
		if (this.state.leu){
			return (
				<div className="Direita">
					{this.state.varios}
				</div>
			)
		}
		return (
			<div className="Direita">
				
			</div>
		);
	}
};

export default Solicitacoes;