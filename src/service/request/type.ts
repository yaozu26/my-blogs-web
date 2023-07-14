import type { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

// 对AxiosRequestConfig配置进行拓展
interface HYInterceptors {
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestFailFn?: (err: any) => any
  responseSuccessFn?: (res: AxiosResponse) => AxiosResponse
  responseFailFn?: (err: any) => any
}

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYInterceptors
}
