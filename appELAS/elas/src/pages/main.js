import React,  { Component } from 'react';
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class Main extends Component {
	static navigationOptions = {
		title: "LIVROS"
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

			<TouchableOpacity style={styles.productButton} onPress={() => {}}>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFAFF"
	},

	list: {
		padding: 20
	},

	productContainer: {
		backgroundColor: '#FFEBC8',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#FFEBC8',
		padding: 20,
		marginBottom: 20
	},

	productTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: "#13293D"
	},

	productDescription: {
		fontSize: 16,
		color: "#13293D",
		marginTop: 5,
		lineHeight: 24
	},

	productButton: {
		height: 42,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#D8315B",
		backgroundColor: "#D8315B",
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10
	},

	productButtonText: {
		fontSize: 16,
		color: "#FFFAFF",
		fontWeight: "bold"
	}
});