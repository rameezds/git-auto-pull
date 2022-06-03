//apis.js
import axios from 'axios'

const api  = axios.create({
  // baseURL: 'http://192.168.1.59:8000/api',
  baseURL: process.env.VUE_APP_BACKEND_API_URL,
  headers: {
    'Accept': 'application/json',
  }
})

export default api

// Use as
// import api from './services/api'
// export default {
//   methods: {
//     async makeRequest() {
//       try {
//         const res = await api.get('/endpoint')
//         console.log(res)  
//       } catch (error) {
//         console.error(error)
//       }
//     }
//   }
// }
