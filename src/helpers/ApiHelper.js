/**
 *  @description This file contains API helper methods.
 */

import { v1ApiPrefix } from '@/src/assets/constants/ApiPath'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const errorHandler = (err) => {
  const statusCode = err?.response?.status

  return {
    success: false,
    statusCode,
    message:
      err?.response?.data?.error ||
      'An error occurred while performing this action'
  }
}

export const promisifyError = (err) => {
  return new Promise((resolve, reject) => {
    reject(errorHandler(err))
  })
}

export const postApi = async (url, data) => {
  try {
    let config

    config = {
      headers: {}
    }
    return axios
      .post(v1ApiPrefix + url, data, config)
      .then((response) => response)
  } catch (err) {
    return promisifyError(err)
  }
}

export const getApi = async (url) => {
  try {
    let config

    config = {
      headers: {}
    }
    return axios.get(v1ApiPrefix + url, config).then((response) => response)
  } catch (err) {
    return promisifyError(err)
  }
}
