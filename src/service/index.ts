import { BASEURL, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASEURL,
  timeout: TIME_OUT
})

export default hyRequest
