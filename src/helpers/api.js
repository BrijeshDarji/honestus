import axios from 'axios'
import { LogOut } from './utils'
// import { logOut, notifyError } from '../utils'

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`
const API_VERSION = `/api/v1`

const server = axios.create({
  baseURL: `${BASE_URL}${API_VERSION}`,
  timeout: 600000
  // headers: {
  // "Access-Control-Allow-Origin": import.meta.env.BACKEND_HOST,
  // "Cache-Control": "no-cache",
  // Pragma: "no-cache",
  // Expires: "0",
  // },
})

server.interceptors.request.use(
  (config) => {
    document.body.classList.add('loading-indicator')
    let token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    // if (import.meta.env.VITE_WITH_CREDS === "true") {
    //   config.withCredentials = true;
    // }
    return config
  },
  (error) => {
    document.body.classList.remove('loading-indicator')
    return Promise.reject(error)
  }
)

server.interceptors.response.use(
  async (response) => {
    document.body.classList.remove('loading-indicator')
    return response
  },
  function (error) {
    document.body.classList.remove('loading-indicator')
    if (
      error.response &&
      error.response.status &&
      error.response.status == 503
    ) {
      /* TODO: Redirect to the maintenance page */
      return Promise.reject(error)
    }

    if (
      error.response &&
      error.response.status &&
      error.response.status == 417
    ) {
      /*TODO: Redirect to the ForceUpdate page */
      return Promise.reject(error)
    }

    if (
      error.response &&
      error.response.data &&
      error.response.data.errors &&
      error.response.data.errors === 'Refresh Token is invalid'
    ) {
      // notifyError('Your session is expired. Please log in again.')
      LogOut()
      return Promise.reject(error)
    }

    if (isTokenExpiredError(error)) {
      LogOut()
      // notifyError('Invalid crendetials')
    }

    return Promise.reject(error)
  }
)

function isTokenExpiredError(error) {
  // Attemp Refresh Token in future
  if (error.response && error.response.status && error.response.status == 401)
    return true
  return false
}

export { server }
