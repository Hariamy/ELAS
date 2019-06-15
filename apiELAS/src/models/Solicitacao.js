const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SolicitacaoSchema = new mongoose.Schema ({
	login: {
		type: String,
		required: true,
	},

	solicitado: {
		type: Array,
		required: false,
	},

});

SolicitacaoSchema.plugin(mongoosePaginate);

mongoose.model('Solicitacao', SolicitacaoSchema);