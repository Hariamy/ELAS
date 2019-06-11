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
        usuario: []
    };

    setLogin(login) {
        this.setState({login})
    };

    setSenha(senha) {
        this.setState({senha})
    };

    pegaUsuario = async (usuario) => {
        const response = await api.get(`/usuarios/login/${this.state.login}`);
        Alert.alert(
            `${response}`,
            
            [
                {text: 'CERTO', onPress: () => {
                    this.props.navigation.navigate("Livros");}
                }
            ],
            {cancelable: false}
        )
        this.setState ({
            usuario: response.data,
            login,
            senha
        })
    };

    presionaEntrar = async () => {
     

        if (this.state.login && this.state.senha) {
            // CONSULTA API
            this.pegaUsuario(this.state.login);

            if (this.state.login === usuario.login) {
                Alert.alert(
                    "Seus dados pessoais",
                    "Nome " + response.nome + " Rua " + response.rua,
                    [
                        {text: 'CERTO', onPress: () => {
                            this.props.navigation.navigate("Livros");}
                        }
                    ],
                    {cancelable: false}
                )
            } else {
                Alert.alert(
                    "Deu rum",
                    [
                        {text: 'CERTO', onPress: () => {
                            this.props.navigation.navigate("Livros");}
                        }
                    ],
                    {cancelable: false}
                )
            }
            // VERIFICA SE SENHA === SENHA
            // SE SIM VAI PRA OUTRA PÁGINA

            

        } else {
            Alert.alert("deu rum rapa")

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

