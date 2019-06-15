const express = require('express');
const routes = express.Router();

const UsuarioController = require('./controllers/UsuarioController');
const LivroController = require('./controllers/LivroController');
const SolicitacaoController = require('./controllers/SolicitacaoController');


// Rotas

routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:id', UsuarioController.show);
routes.get('/usuarios/login/:login', UsuarioController.showLogin);
routes.post('/usuarios', UsuarioController.store);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.destroy);

routes.get('/livros', LivroController.index);
routes.get('/livros/:id', LivroController.show);
routes.post('/livros', LivroController.store);
routes.put('/livros/:id', LivroController.update);
routes.delete('/livros/:id', LivroController.destroy);

routes.get('/solicitacao', SolicitacaoController.index);
routes.get('/solicitacao/:id', SolicitacaoController.show);
routes.get('/solicitacao/login/:login', SolicitacaoController.showLogin);
routes.post('/solicitacao', SolicitacaoController.store);
routes.put('/solicitacao/:id', SolicitacaoController.update);
routes.delete('/solicitacao/:id', SolicitacaoController.destroy);


module.exports = routes;