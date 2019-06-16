const mongoose = require('mongoose');

const Administrador = mongoose.model('Administrador');

module.exports = {
	async index(req, res) {
		const { page = 1 } = req.query;
		const administradores = await Administrador.paginate({}, { page, limit: 10});

		return res.json(administradores);
	},

	async show(req, res) {
		const administrador = await Administrador.findById(req.params.id);

		return res.json(administrador);
	},

	async showLogin(req, res) {
		const administrador = await Administrador.findOne( {login: req.params.login} );

		return res.json(administrador);
	},


	async store(req, res) {
		const administrador = await Administrador.create(req.body);

		return res.json(administrador);
	},
	
	async update(req, res) {
		const administrador = await Administrador.findByIdAndUpdate(req.params.id, req.body, { new: true });

		return res.json(administrador);
	},

	async destroy(req, res) {
		await Administrador.findByIdAndRemove(req.params.id);

		return res.send();
	},

};

