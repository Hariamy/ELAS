import React from 'react';

import { View, Text } from 'react-native';

import { infoEstilo } from '../estilo/estilo'


const Informacoes = () => (
    <View style={infoEstilo.fundo}>
        <View style={infoEstilo.painelInterno}>

            <Text style={infoEstilo.painelInternoFont}>Para solicitar uma conta dirija-se até o guichê para solicitar o cadastro no ELAS</Text>
            <Text style={infoEstilo.painelInternoFont}r> </Text>
            <Text style={infoEstilo.painelInternoFont}r>Tenha em mãos: </Text>
            <Text style={infoEstilo.painelInternoFont}r>      Identidade </Text>
            <Text style={infoEstilo.painelInternoFont}r>      CPF </Text>
            <Text style={infoEstilo.painelInternoFont}r>      Comprovante de Residênca </Text>
            <Text style={infoEstilo.painelInternoFont}r> </Text>
            <Text style={infoEstilo.painelInternoFont}r> </Text>
            <Text style={infoEstilo.painelInternoFont}r> </Text>
            <Text style={infoEstilo.painelInternoFont}r> </Text>
            <Text style={infoEstilo.painelInternoFont}r> Boa Leitura! </Text>
        </View>
    </View>
);

Informacoes.navigationOptions = () => ({
    title: 'voltar',
    headerStyle: {
        backgroundColor: "#FFFAFF"

    },

    headerTitleStyle: {
        color: "#13293D",
        fontWeight: "400"
    },

    headerTintColor: "#13293D"
});
    
export default Informacoes;
