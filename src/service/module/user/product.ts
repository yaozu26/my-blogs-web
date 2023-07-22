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
