const express = require('express');
const routes = express.Router();

const UsuarioController = require('./controllers/UsuarioController');
const LivroController = require('./controllers/LivroController');


// Rotas

routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:id', UsuarioController.show);
routes.post('/usuarios', UsuarioController.store);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.destroy);


routes.get('/livros', LivroController.index);
routes.get('/livros/:id', LivroController.show);
routes.post('/livros', LivroController.store);
routes.put('/livros/:id', LivroController.update);
routes.delete('/livros/:id', LivroController.destroy);

module.exports = routes;