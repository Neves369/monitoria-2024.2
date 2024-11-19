import api from "../api";

// Define a função assíncrona 'login' que recebe um objeto 'usuario'
const login = async (usuario: { email: string; senha: string; }) => {
    // Tenta fazer uma requisição POST à API
    try {
        // Retorna a resposta da requisição
        return await api.get(`users?email=${usuario.email}&senha=${usuario.senha}`);
       
    } catch (error) {
        // Caso ocorra algum erro na requisição, exibe o erro no console
        return console.error(error);
    }
}

// Exporta o objeto padrão com a função 'login'
export default {
    login
}
