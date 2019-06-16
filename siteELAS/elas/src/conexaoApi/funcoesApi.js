import { booleanLiteral } from "@babel/types";
import { timeout } from "q";

export const getUsers = 'http://localhost:3001/api/usuarios/';
export const getUser = 'http://localhost:3001/api/usuarios/login/';
export const getAdm = 'http://localhost:3001/api/administradores/login/';
export const getSolicitacao = 'http://localhost:3001/api/solicitacao/?page=';
export const getLivro = 'http://localhost:3001/api/livros/';

var estaAutenticado = false;

export const autenticacao = {

    setAutenticado() {
        estaAutenticado = true;
        console.log(estaAutenticado)
        
    },

    getStatusAut() {
        console.log("pros caras la",estaAutenticado)
        return true
    },
    signout(cb) {
    
    }
};

