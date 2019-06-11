import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Login from './pages/login';
import Usuario from './pages/usuario';
import Informacoes from './pages/informacao';
import Livros from './pages/livros';

export default createStackNavigator ({
	Login,
	Main,
	Usuario,
	Informacoes,
	Livros

}, {
	navigationOptions: {
		headerStyle: {
			backgroundColor: "#1B9AAA"
		},

		headerTintColor : "#FFFAFF"
	},
});