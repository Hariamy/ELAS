const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const LivroSchema = new mongoose.Schema ({
	titulo: {
		type: String,
		required: true,
	},
	autor: {
		type: String,
		required: true,
	},
	editora: {
		type: String,
		required: true,
	},
	edicao: {
		type: String,
		required: true,
	},
	cdd: {
		type: String,
		required: true,
	},
	capa: {
		type: String,
		required: true,
	},

});

LivroSchema.plugin(mongoosePaginate);

mongoose.model('Livro', LivroSchema);