const mongoose = require('mongoose');

const Solicitacao = mongoose.model('Solicitacao');

module.exports = {
	async index(req, res) {
		const { page = 1 } = req.query;
		const solicitacoes = await Solicitacao.paginate({}, { page, limit: 10});

		return res.json(solicitacoes);
	},

	async show(req, res) {
		const solicitacao = await Solicitacao.findById(req.params.id);

		return res.json(solicitacao);
	},

	async showLogin(req, res) {
		const solicitacao = await Solicitacao.findOne( {login: req.params.login} );

		return res.json(solicitacao);
	},


	async store(req, res) {
		const solicitacao = await Solicitacao.create(req.body);

		return res.json(solicitacao);
	},
	
	async update(req, res) {
		const solicitacao = await Solicitacao.findByIdAndUpdate(req.params.id, req.body, { new: true });

		return res.json(solicitacao);
	},

	async destroy(req, res) {
		await Solicitacao.findByIdAndRemove(req.params.id);

		return res.send();
	},

};

