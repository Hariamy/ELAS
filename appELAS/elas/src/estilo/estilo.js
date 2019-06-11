
import { StyleSheet } from 'react-native';

export const Cores = {
    branco: "#FFFAFF",
    amarelo: '#FFEBC8',
    preto: "#13293D",
    rosa: "#D8315B",
    verde: "#1B9AAA"
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Cores.branco
	},

	list: {
		padding: 20
	},

	productContainer: {
		backgroundColor: Cores.amarelo,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: Cores.amarelo,
		padding: 20,
		marginBottom: 20
	},

	productTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Cores.preto
	},

	productDescription: {
		fontSize: 16,
		color: Cores.preto,
		marginTop: 5,
		lineHeight: 24
	},

	productButton: {
		height: 42,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: Cores.rosa,
		backgroundColor: Cores.rosa,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10
	},

	productButtonText: {
		fontSize: 16,
		color: Cores.branco,
		fontWeight: "bold"
	}
});

export const loginEstilo = StyleSheet.create({
    fundo: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Cores.verde,
        flex: 1
    },
    imagem: {
        width: 150, 
        height: 150
    },
    titulo: {
        fontSize: 60,
        color: Cores.branco,
        fontWeight: 'bold'
    },

    subTitulo: {
        fontSize: 20,
        color: Cores.branco,
        marginBottom: 20
    },

    textoForm: {
        height: 45,
        width: 280,

        fontSize: 18,
        color: Cores.preto,

        borderColor: Cores.branco,
        backgroundColor: Cores.branco,
        
        borderRadius: 50,
        borderWidth: 2,
        
        marginBottom: 20
    },

    botaoEntrar: {
        height: 42,
        width: 150,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: Cores.rosa,
		backgroundColor: Cores.rosa,
		justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
        
    },

    textoBotaoEntrar: {
        fontSize: 25,
		color: Cores.branco,
        fontWeight: "bold",
    },

    botaoSolicitar: {

    },

    textoBotaoSolicitar: {
        fontSize: 18,
		color: Cores.branco
    }
});

export const infoEstilo = StyleSheet.create({
    fundo: {
        alignItems: 'center',
        backgroundColor: Cores.branco,
        flex: 1
    },
    
    painelInterno: {
        width: 300,
        height: 400,
        borderRadius: 30,
        justifyContent: 'center',
        borderWidth: 20,
        borderColor: Cores.amarelo,
        backgroundColor: Cores.amarelo
    },

    painelInternoFont: {
        fontSize: 18,
		color: Cores.preto
    }
});
