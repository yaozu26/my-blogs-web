import hyRequest from '../..'

// 获取所有记录
export const getRecordListData = () => {
  return hyRequest.get({
    url: '/record',
    data: {
      limit: 5
    }
  })
}

// 查找用户信息
export const getUserInfoData = () => {
  return hyRequest.get({
    url: '/users/2'
  })
}
