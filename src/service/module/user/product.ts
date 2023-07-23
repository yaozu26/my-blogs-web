import hyRequest from '@/service'

// 获取项目列表
export const getProductData = () => {
  return hyRequest.get({
    url: '/project'
  })
}

// 发布项目
export const postProductRequest = (title: string, theme: string, labels: any[], content: any) => {
  return hyRequest.post({
    url: '/project',
    data: {
      title,
      theme,
      content,
      labels
    }
  })
}

// 获取项目详情
export const getProductDetail = (id: number) => {
  return hyRequest.get({
    url: `/project/${id}`
  })
}

// 更新项目详情
export const updateProductData = (
  id: number | string,
  title: string,
  theme: string,
  labels: any[],
  content: any
) => {
  return hyRequest.patch({
    url: `/project/${id}`,
    data: {
      title,
      theme,
      content,
      labels
    }
  })
}

// 删除项目
export const deleteProductRequest = (id: number) => {
  return hyRequest.delete({
    url: `/project/${id}`
  })
}
