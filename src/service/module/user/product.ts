import hyRequest from '@/service'

// 获取项目列表
export const getProductData = () => {
  return hyRequest.get({
    url: '/project'
  })
}
