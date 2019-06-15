import React, { Component } from 'react';
import '../../estilo/App.css';

import { getUsers, getUser } from '../../conexaoApi/funcoesApi';

import { BotaoRosa, BotaoVerde } from '../../estilo/estilos.js'

import Barra from '../barra';
import Busca from './busca';
import Formulario from './formulario';
import BuscarUsuario from './buscarUsuario';
import { throwStatement } from '@babel/types';

class Usuario extends Component {
	state = {
		inserir: false,
		buscar: false,
		nome: '',
		endereco: '',
		numero: '',
		cep: '',
		telefone: '',
		login: '',
		senha: '',
		loginBusca: '',
		id: '',
		resultBusca: [],
		buscaRealizada: false,
		editar: false,
	}

	inserir() {
		this.setState({
			inserir: true,
			buscar: false,
		})
	}

	buscar() {
		this.setState({
			inserir: false,
			buscar: true,
		})
	}

	cancelar() {
		this.setState({
			inserir: false,
			buscar: false,
		})
	}

	mudaNome(e) { this.setState({ nome: e.target.value }) }
	mudaEndereco(e) { this.setState({ endereco: e.target.value }) }
	mudaNumero(e) { this.setState({ numero: e.target.value }) }
	mudaCep(e) { this.setState({ cep: e.target.value }) }
	mudaTelefone(e) { this.setState({ telefone: e.target.value }) }
	mudaLogin(e) { this.setState({ login: e.target.value }) }
	mudaSenha(e) { this.setState({ senha: e.target.value }) }

	inserirUsuario = async () => {
		if (this.state.login !== null) {
			const response = await fetch(getUsers, { 
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify ({
					nome: this.state.nome,
					rua: this.state.endereco,
					numero: this.state.numero,
					cep: this.state.cep,
					telefone: this.state.telefone,
					login: this.state.login,
					senha: this.state.senha,
					alugado: [],
					multa: '0.0'
				})
			});

			if (response.ok) {
				alert("Usuário inserido com sucesso")
				console.log("negocio inserido")
			} else {
				alert("Erro ao inserir usuário")
			}
		}
		this.setState({
			inserir: false,
			buscar: false
		})
	}

	mudaLoginBusca(e) { this.setState({ loginBusca: e.target.value } )}

	buscarUsuario = async () => {
		const response = await fetch(getUser+this.state.loginBusca)
		const body = await response.json();
		if (response.ok && body !== null) {
			this.setState({
				nome: body.nome,
				endereco: body.rua,
				numero: body.numero,
				cep: body.cep,
				telefone: body.telefone,
				login: body.login,
				senha: body.senha,
				buscaRealizada: true,
				id: body._id
			})
			
		} else {
			alert("Usuário não encontrado")
			this.setState({
				buscaRealizada: false
			})
		}
	}

	editaNome(e) { 
		const aux = this.state.resultBusca[0];
		aux.nome = e.target.value;
		this.setState({ resultBusca: [aux] }) 
	}
	editaEndereco(e) { 
		const aux = this.state.resultBusca[0];
		aux.rua = e.target.value;
		this.setState({ resultBusca: [aux] }) 
	}
	editaNumero(e) { 
		const aux = this.state.resultBusca[0];
		aux.numero = e.target.value;
		this.setState({ resultBusca: [aux] }) 
	}
	editaCep(e) { 
		const aux = this.state.resultBusca[0];
		aux.cep = e.target.value;
		this.setState({ resultBusca: [aux] }) 
	}
	editaTelefone(e) { 
		const aux = this.state.resultBusca[0];
		aux.telefone = e.target.value;
		this.setState({ resultBusca: [aux] }) 
	}

	excluirUsuario = async () => {
		if (this.state.login !== null) {
			const response = await fetch(getUsers+this.state.id, { method: 'DELETE'} );

			if (response.ok) {
				alert("Usuário Deletado com sucesso")
			} else {
				alert("Erro ao excluir usuário")
			}
		}
		this.setState({
			inserir: false,
			buscar: false,
			buscaRealizada: false,
			editar: false
		})
	}

	editarUsuario () {
		this.setState({
			editar: true,
			inserir: false,
			buscar: false,
			buscaRealizada: false

		})
	}

	inserirEdicaoUsuario = async () => {
		const response = await fetch(getUsers+this.state.id, { 
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify ({
				nome: this.state.nome,
				rua: this.state.endereco,
				numero: this.state.numero,
				cep: this.state.cep,
				telefone: this.state.telefone,
				login: this.state.login,
				senha: this.state.senha,
				alugado: [],
				multa: '0.0'
			})
		});

		if (response.ok) {
			alert("Usuário inserido com sucesso")
			this.setState({
				editar: false,
				inserir: false,
				buscar: false
		
			})
			console.log("negocio inserido")
		} else {
			alert("Erro ao inserir usuário")
		}
	}

	cancelarEdicao () {
		this.setState({
			editar: false,
			inserir: false,
			buscar: true
		})
	}
	render() {
		if (this.state.editar) {
			return (
				<div className="Inicio">
					<Barra aba="usuario"/>
					<div className="Direita">
						<div className="PainelInserirUsuario">
							<h1 className="TituloInserirUsuario">INSERIR USUÁRIO</h1>
							<Formulario 
								cancelar={this.cancelarEdicao.bind(this)}
								confirmar={this.buscar.bind(this)}
								mudaNome={this.mudaNome.bind(this)}
								mudaEndereco={this.mudaEndereco.bind(this)}
								mudaNumero={this.mudaNumero.bind(this)}
								mudaCep={this.mudaCep.bind(this)}
								mudaTelefone={this.mudaTelefone.bind(this)}
								mudaLogin={this.mudaLogin.bind(this)}
								mudaSenha={this.mudaSenha.bind(this)}
								inserirUsuario={this.inserirEdicaoUsuario.bind(this)}

								nome={this.state.nome}
								rua={this.state.endereco}
								numero={this.state.numero}
								cep={this.state.cep}
								telefone={this.state.telefone}
								login={this.state.login}
								senha={this.state.senha}

								rosa='CANCELAR'
								verde='ALTERAR'
							/>
						</div>
					</div>
				</div>
			)
		} else if (this.state.inserir) {
			return (
				<div className="Inicio">
					<Barra aba="usuario"/>
					<div className="Direita">
						<div className="PainelInserirUsuario">
							<h1 className="TituloInserirUsuario">INSERIR USUÁRIO</h1>
							<Formulario 
								mudaNome={this.mudaNome.bind(this)}
								mudaEndereco={this.mudaEndereco.bind(this)}
								mudaNumero={this.mudaNumero.bind(this)}
								mudaCep={this.mudaCep.bind(this)}
								mudaTelefone={this.mudaTelefone.bind(this)}
								mudaLogin={this.mudaLogin.bind(this)}
								mudaSenha={this.mudaSenha.bind(this)}

								nome={this.state.nome}
								rua={this.state.endereco}
								numero={this.state.numero}
								cep={this.state.cep}
								telefone={this.state.telefone}
								login={this.state.login}
								senha={this.state.senha}

								rosa='CANCELAR'
								verde='INSERIR'

								cancelar={this.cancelar.bind(this)}
								inserirUsuario={this.inserirUsuario.bind(this)}
							/>
						</div>
					</div>
				</div>
			)
		} else if (this.state.buscar) {
			if (this.state.buscaRealizada) {
				return (
					<div className="Inicio">
						<Barra aba="usuario"/>
						<div className="Direita">
							<div className="PainelBuscarUsuario">
								<h1 className="TituloInserirUsuario">BUSCAR USUARIO</h1>
								<BuscarUsuario 
									cancelar={this.cancelar.bind(this)}
									mudaLoginBusca={this.mudaLoginBusca.bind(this)}
									buscarUsuario={this.buscarUsuario.bind(this)}
								/>
							</div>
							<div className="PainelUsuarioBuscado">
								<div className="Info">
									<p className="Informacoes">Usuário: &nbsp;</p>
										<p>{this.state.nome} </p>
									<p className="Informacoes">Pendências: &nbsp;</p>
										<p>Nenhuma</p>
									<p className="Informacoes">Rua: &nbsp;</p>
										<p>{this.state.endereco}</p>
									<p className="Informacoes">Numero: &nbsp;</p>
										<p>{this.state.numero}</p>
									<p className="Informacoes">CEP: &nbsp;</p>
										<p>{this.state.cep}</p>
									<p className="Informacoes">Usuário: &nbsp;</p>
										<p>{this.state.login}</p>
								</div>
	
								<div className="Confirmar">
									<div className="BotaoConfirmar">
										<BotaoVerde onClick={this.editarUsuario.bind(this)}>EDITAR</BotaoVerde>
									</div>
									<div className="BotaoConfirmar">
										<BotaoRosa onClick={this.excluirUsuario}>EXCLUIR</BotaoRosa>
									</div>
								</div>
							</div>
						</div>
					</div>
				)

			} else {
				return (
					<div className="Inicio">
						<Barra aba="usuario"/>
						<div className="Direita">
							<div className="PainelBuscarUsuario">
								<h1 className="TituloInserirUsuario">BUSCAR USUARIO</h1>
								<BuscarUsuario 
									cancelar={this.cancelar.bind(this)}
									mudaLoginBusca={this.mudaLoginBusca.bind(this)}
									buscarUsuario={this.buscarUsuario.bind(this)}
								/>
							</div>
						</div>
					</div>
				)

			}
		}
		return (
			<div className="Inicio">
				<Barra aba="usuario"/>
				<div className="Direita">
					<div className="PainelUsuario">
						<h1 className="TituloUsuario">USUÁRIO</h1>
						<Busca 
							botaoRosa={this.inserir.bind(this)}
							botaoVerde={this.buscar.bind(this)}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Usuario;

