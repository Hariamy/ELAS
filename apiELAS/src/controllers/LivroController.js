const mongoose = require('mongoose');

const Livro = mongoose.model('Livro');

module.exports = {
	async index(req, res) {
		const { page = 1 } = req.query;
		const livros = await Livro.paginate({}, { page, limit: 10});

		return res.json(livros);
	},

	async show(req, res) {
		const livro = await Livro.findById(req.params.id);

		return res.json(livro);
	},

	async store(req, res) {
		const livro = await Livro.create(req.body);

		return res.json(livro);
	},
	
	async update(req, res) {
		const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });

		return res.json(livro);
	},

	async destroy(req, res) {
		await Livro.findByIdAndRemove(req.params.id);

		return res.send();
	},

};

