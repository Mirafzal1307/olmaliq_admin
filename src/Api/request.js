import axios from 'axios'
import { API_URL } from "../constants/ApiConstants";
const request = axios.create({
  baseURL: API_URL,
  timeout: 60000
})

const errorHandler = (error) => {
//   if (error.response) {
//     const data = error.response.data
//     const token = storage.get(ACCESS_TOKEN)
//     if (error.response.status === 403) {
//       notification.error({
//         message: 'Запрещенный',
//         description: data.message,
//       })
//     }
//     if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
//       notification.error({
//         message: 'Неавторизованный',
//         description: 'Проверка авторизации не удалась',
//       })
//       if (token) {
//         store.dispatch('Logout').then(() => {
//           setTimeout(() => {
//             window.location.reload()
//           }, 1500)
//         })
//       }
//     }
//   }
  return Promise.reject(error)
}

request.interceptors.request.use((config) => {
          console.log(config);
//   const token = storage.get(ACCESS_TOKEN)
//   if (token) {
//     config.headers['Authorization'] = 'B' + ' ' + token
//   }
//   config.headers['platform-id'] = '7d4a4c38-dd84-4902-b744-0488b80a4c04'
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
          console.log(response);
  return response.data    
}, errorHandler)


export default request
