import axios, { AxiosInstance } from "axios";

/**
 * Cria uma instância do cliente Axios com a base URL definida
 * para fazer requisições HTTP para a API
 */
const api: AxiosInstance = axios.create({
  /**
   * URL base para as requisições HTTPS
   */
  baseURL: `https://665f845a5425580055b0004d.mockapi.io/`
});

// Para interceptar erros de conexão
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.log(error.response.data?.message || 'Erro desconhecido');

    } else if (error.request) {
      console.log("Erro de conexão ou nenhuma resposta do servidor.");
    } else {
      console.log(`Erro ao configurar a requisição: ${error.message}`)
    }
    return Promise.reject(error); 
  }
);

/**
 * Exporta a instância do cliente Axios como padrão
 */
export default api;