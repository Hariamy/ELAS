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

	alugado: {
		type: Array,
		required: false,
	},

	multa: {
		type: mongoose.Decimal128,
		require: true,
	}
});

UsuarioSchema.plugin(mongoosePaginate);

mongoose.model('Usuario', UsuarioSchema);