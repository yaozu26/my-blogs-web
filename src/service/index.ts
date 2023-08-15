import { LOGIN_TOKEN } from '@/global/constants'
import { BASEURL, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASEURL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      const token = localStorage.getItem(LOGIN_TOKEN)
      if (config.headers && token) {
        config.headers.Authorization = 'Bearer ' + token
      }
      return config
    }
  }
})

export default hyRequest
