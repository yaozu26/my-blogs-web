import hyRequest from '..'

// 查找作者信息
export const getUserInfoData = () => {
  return hyRequest.get({
    url: '/users/2'
  })
}

// 获取所有标签
export const getLabelListData = () => {
  return hyRequest.get({
    url: '/label/list'
  })
}
