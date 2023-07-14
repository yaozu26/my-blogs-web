import hyRequest from '..'
import type { IAccount } from '@/types'

// 用户登录
export const accountLoginRequest = (account: IAccount) => {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

// 注册用户
export const registerUserRequest = (account: IAccount) => {
  return hyRequest.post({
    url: '/users',
    data: account
  })
}
