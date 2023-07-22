import hyRequest from '..'

// 获取所有标签
export const getLabelListData = () => {
  return hyRequest.get({
    url: '/label/list'
  })
}
