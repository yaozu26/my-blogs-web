import hyRequest from '../..'

// 查找用户信息
export const getUserInfoData = () => {
  return hyRequest.get({
    url: '/users/2'
  })
}
