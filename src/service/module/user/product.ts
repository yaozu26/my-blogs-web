import hyRequest from '@/service'

// 获取项目列表
export const getProductData = () => {
  return hyRequest.get({
    url: '/project'
  })
}

// 获取项目详情
export const getProductDetail = (id: number) => {
  return hyRequest.get({
    url: `/project/${id}`
  })
}
