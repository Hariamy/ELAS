import React,  { Component } from 'react';

import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import api from '../services/api';
import { styles } from '../estilo/estilo';


export default class Livros extends Component {
	static navigationOptions = {
		title: "LIVROS",
		headerTitleStyle: {
			textAlign: 'right',
			fontSize: 30
		},
		headerLeft: null,
	};

	state = {
		productInfo: {},
		docs: [],
		page: 1,
	};

	componentDidMount() {
		this.loadUsuarios();
	};

	loadUsuarios = async (page = 1) => {
		
		const response = await api.get(`/usuarios?page=${page}`);
		
		const { docs, ...productInfo } = response.data;
		
		this.setState({ 
			docs: [... this.state.docs, ... docs], 
			productInfo,
			page 
		});
	
	};

	loadMore = () => {
		const { page, productInfo } = this.state;

		if (page === productInfo.pages) return;

		const pageNumber = page + 1;

		this.loadUsuarios(pageNumber);
	}

	renderItem = ({ item }) => (
		<View style={styles.productContainer}>
			<Text style={styles.productTitle}>Nome {item.nome}</Text>
			<Text style={styles.productDescription}>Rua {item.rua}</Text>

			<TouchableOpacity 
				style={styles.productButton} 
				onPress={() => {
					this.props.navigation.navigate("Usuario", { usuario: item });
				}}
			>
				<Text style={styles.productButtonText }>Acessar</Text>
			</TouchableOpacity>
		</View>
	);

	render() {
		return (
			<View styles={ styles.container }>
				<FlatList
					contentContainerStyle={styles.list}
					data={this.state.docs}
					keyExtractor={item => item._id}
					renderItem={this.renderItem}
					onEndReached={this.loadMore}
					onEndReachedThreshold={0.1}
				/>
			</View>
		);
	};
}
