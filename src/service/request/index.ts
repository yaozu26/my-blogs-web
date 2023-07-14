import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)

    // 给每个instance实例添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )

    // 给特定的instance实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailFn
    )
  }

  request(config: HYRequestConfig) {
    return this.instance.request(config)
  }

  get(config: HYRequestConfig) {
    return this.request({
      ...config,
      method: 'GET'
    })
  }

  post(config: HYRequestConfig) {
    return this.request({
      ...config,
      method: 'POST'
    })
  }

  delete(config: HYRequestConfig) {
    return this.request({
      ...config,
      method: 'DELETE'
    })
  }

  patch(config: HYRequestConfig) {
    return this.request({
      ...config,
      method: 'PATCH'
    })
  }
}

export default HYRequest
