import type { AxiosResponse } from 'axios'
import Axios, { AxiosError } from 'axios'
import httpStatus from 'http-status-codes'
// import humps from 'humps'

// import { refreshAccessToken } from 'services/auth'

// const { camelizeKeys } = humps

export const createApi = () => {
  const _api = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    validateStatus: (status) => status >= httpStatus.OK && status < httpStatus.BAD_REQUEST, // 200 ~ 399
    headers: {
      //   ...(accessToken && { Authorization: `Bearer ${accessToken}` })
    }
  })

  _api.interceptors.request.use((config) => {
    return config
  })

  _api.interceptors.response.use(
    // try
    (response) => {
      return response
    },
    // catch
    async (error) => {
      if (error instanceof AxiosError) {
        const errorStatus = error.response?.status ?? 0

        if ([httpStatus.UNAUTHORIZED, httpStatus.FORBIDDEN].includes(errorStatus)) {
          return
        }
      }

      return Promise.reject(error)
    }
  )

  return _api
}

const api = createApi()

export default api
