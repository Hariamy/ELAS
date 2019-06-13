import React, { Component } from 'react';
import '../../estilo/App.css';

import Formulario from './formulario';
import Logo from './logo';
import { getUsers, getUser } from '../../conexaoApi/funcoesApi';
import { autenticar } from '../../conexaoApi/funcoesApi'

class Login extends Component {
	state = {
		response: []
	};

	componentDidMount() {

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
		console.log()
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
		console.log()
		return body.docs;
	};

	state = {
        usuario: '',
		senha: '',
		autenticado: false
    }

    mudaUsuario(e) {
        this.setState({ usuario: e.target.value })
    }
    mudaSenha(e) {
        this.setState({ senha: e.target.value })
    }

    async loginSubmit(e) {
		console.log('ta dando o fetch')
		const response = await fetch(getUser+this.state.login);
	
		const body = await response.json();
		console.log(body.senha);
	
		if (body.senha === this.state.senha) {
			this.setState({ autemticado: true })

			console.log('login realizado vai pra página seguinte')
			
		} else {
			this.setState({ autenticado: false})
			console.log("Deu ruim ")
		}
	}

	autenticado = () => ( this.state.autenticado )

	render() {
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