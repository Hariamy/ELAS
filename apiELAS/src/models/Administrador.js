const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AdministradorSchema = new mongoose.Schema ({
	nome: {
		type: String,
		required: true,
	},
	rua: {
		type: String,
		required: true,
	},
	numero: {
		type: Number,
		required: true,
	},
	cep: {
		type: Number,
		required: true,
	},
	telefone: {
		type: Number,
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

AdministradorSchema.plugin(mongoosePaginate);

mongoose.model('Administrador', AdministradorSchema);