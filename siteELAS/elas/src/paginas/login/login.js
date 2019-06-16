import React, { Component } from 'react';
import '../../estilo/App.css';

import Formulario from './formulario';
import Logo from './logo';
import { getUsers, getUser, getAdm } from '../../conexaoApi/funcoesApi';
import { autenticacao } from '../../conexaoApi/funcoesApi'

import { Redirect } from 'react-router-dom'

class Login extends Component {
	state = {
		response: [],
		botaoLogin: false,
		usuario: '',
		senha: '',
	};

	componentDidMount() {
		this.setState({
			response: this.state.response,
			botaoLogin: false,
			usuario: this.state.usuario,
			senha: this.state.senha
		})
	}
	
	callApi = async () => {
		const response = await fetch(getUsers, { 
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify ({
				nome: 'Angela',
				rua: 'b',
				numero: '11',
				cep: '60330310',
				telefone: '985297690',
				login: 'ang',
				senha: '123',
				alugado: [],
				multa: '0.0'
			})
		});

		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);
	
		return body.docs;
	};

	updateAPI = async () => {
		const response = await fetch(getUsers+'/5d002723fa2b305f36fd0732', { 
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify ({
				nome: 'Hariscar',
			})
		});

		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);
	
		return body.docs;
	};



    mudaUsuario(e) {
        this.setState({ 
			usuario: e.target.value,
			response: this.state.response,
			botaoLogin: false,
			senha: this.state.senha
		})
    }
    mudaSenha(e) {
        this.setState({ 
			senha: e.target.value,
			response: this.state.response,
			botaoLogin: false,
			usuario: this.state.usuario,
		})
    }

    async loginSubmit(e) {
		const response = await fetch(getAdm+this.state.usuario);
        const body = await response.json();

        if (body !== null) {
            if (await body.senha === this.state.senha) {
				autenticacao.setAutenticado();
				this.setState({ 
					senha: this.state.senha,
					response: this.state.response,
					botaoLogin: true,
					usuario: this.state.usuario,
				})
            } else {
				alert("Erro ao logar! Senha incorreta.")
            }
        }
        else {
            alert("Erro ao logar! Login incorreto.")
		}
	}
	
	render() {
		if (autenticacao.getStatusAut() && this.state.botaoLogin) return <Redirect from='/login' to ='/solicitar'/>
		return (
			<div className="Inicio">
				<Logo/>
				<Formulario
					mudaSenha={this.mudaSenha.bind(this)}
					mudaUsuario={this.mudaUsuario.bind(this)}
					loginSubmit={this.loginSubmit.bind(this)}
				/>
			</div>
		)
	}
}

export default Login;