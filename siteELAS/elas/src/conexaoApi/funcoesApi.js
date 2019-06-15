import { booleanLiteral } from "@babel/types";
import { timeout } from "q";

export const getUsers = 'http://localhost:3001/api/usuarios/';
export const getUser = 'http://localhost:3001/api/usuarios/login/';
export const getSolicitacao = 'http://localhost:3001/api/solicitacao/?page=';
export const getLivro = 'http://localhost:3001/api/livros/';

var estaAutenticado = false

export const autenticacao = {

    async autenticar(login='', senha='') {
        
        console.log('ta dando o fetch');
        this.getStatus();
        const response = await fetch(getUser+login);
        
        const body = await response.json();

        if (body !== null) {
            console.log(body.senha);
    
            if (body.senha === senha) {
                estaAutenticado = true
                
                console.log('login realizado vai pra página seguinte')
                console.log(body.senha + " == " + senha )
                
            } else {
            
                console.log("Deu rum ")
            }
        }
        else {
            console.log("Login  ou senha incorretos")
        }
    
    },

    getStatus() {
        console.log(estaAutenticado)
        return true
    },

    getStatusAut() {
        return true
    },
    signout(cb) {
    
    }
};

