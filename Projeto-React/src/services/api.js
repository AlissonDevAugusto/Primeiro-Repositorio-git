import axios from "axios" /* Framework para nos conectar com a 'api' conexao do front e back */

const api = axios.create({
    baseURL: "http://localhost:3000"
})

export default api