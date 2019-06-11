import React from 'react';

import { WebView } from 'react-native';

import { Text } from 'react-native';

const Usuario = ({ navigation }) => (
    <Text>Oi</Text>
    //<WebView source={{ uri: navigation.state.params.usuario.nome }}/>
);

Usuario.navigatioOptions = ({ navigation }) => ({
    title: navigation.state.params.usuario.nome
});

export default Usuario;