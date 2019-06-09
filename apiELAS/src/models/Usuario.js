const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UsuarioSchema = new mongoose.Schema ({
	nome: {
		type: String,
		required: true,
	},
	rua: {
		type: String,
		required: true,
	},
	numero: {
		type: String,
		required: true,
	},
	cep: {
		type: String,
		required: true,
	},
	telefone: {
		type: String,
		required: true,
	},
	login: {
		type: String,
		required: true,
	},

	senha: {
		type: String,
		required: true,
	},
});

UsuarioSchema.plugin(mongoosePaginate);

mongoose.model('Usuario', UsuarioSchema);