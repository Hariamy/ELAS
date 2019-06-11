import React,  { Component } from 'react';

import { View, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

import api from '../services/api';

import { loginEstilo, styles } from '../estilo/estilo';

export default class Main extends Component {
    static navigationOptions = {
		header: null
	};

    state = {
        login: '',
        senha: '',
    };

    setLogin(login) {
        this.setState({login})
    };

    setSenha(senha) {
        this.setState({senha})
    };

    pegaUsuario = async () => {
        const response = await api.get(`/usuarios/login/${this.state.login}`);
        
        if (response.data.senha === this.state.senha) {
            this.props.navigation.navigate("Livros");

        } else {
            Alert.alert(
                "ERRO!",
                "Usuário ou senha incorretos.",
                [{text: 'OK', onPress: () => {}}],
                {cancelable: false},
            );
        }
    };

    presionaEntrar(){
        if (this.state.login && this.state.senha) {
            // CONSULTA API
            this.pegaUsuario();
        }
    };

	render() {
		return (
            <View 
                style={loginEstilo.fundo}>
                <Image 
                    style={loginEstilo.imagem}
                    source={ require('../imagens/icone.png') }
                />
                
                <Text style={ loginEstilo.titulo }>ELAS</Text>
                <Text style={ loginEstilo.subTitulo }>Electronic Automated Library System</Text>
                
                <TextInput
                    style={ loginEstilo.textoForm }
                    placeholder="Login:"
                    value={this.state.titulo}
                    onChangeText={(login) => this.setLogin(login)}
                />
                
                <TextInput
                    secureTextEntry
                    style={ loginEstilo.textoForm }
                    placeholder="Senha:"
                    value={this.state.senha}
                    onChangeText={(senha) => this.setSenha(senha)}
                />

                <TouchableOpacity 
                    style={ loginEstilo.botaoEntrar } 
                    onPress={() => this.presionaEntrar()}
                >
                    <Text style={ loginEstilo.textoBotaoEntrar }>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={ loginEstilo.botaoSolicitar }
                    onPress={() => {
                        this.props.navigation.navigate("Informacoes");
                    }}
                >
                    <Text style={ loginEstilo.textoBotaoSolicitar }>Solicitar Cadastro</Text>
                </TouchableOpacity>
			</View>
		);
	};
}

