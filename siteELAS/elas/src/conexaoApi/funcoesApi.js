
export const getUsers = 'http://localhost:3001/api/usuarios';
export const getUser = 'http://localhost:3001/api/usuarios/login/';


export const autenticar = async (login = '', senha = '') => {
    console.log('ta dando o fetch')
    const response = await fetch(getUser+login);

    const body = await response.json();
    console.log(body.senha);

    if (body.senha === senha) {
 
        console.log('login realizado vai pra página seguinte')
        console.log(body.senha + " == " + senha )
        
        return true
    } else {
        console.log("Deu rum ")
    }
}

