import axios from 'axios'
// Base da URL: https://api.themoviedb.org/3
//URL API: movie/now_playing?api_key=9dae1f7a9ea5a808d3dc8fceea90e235&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api