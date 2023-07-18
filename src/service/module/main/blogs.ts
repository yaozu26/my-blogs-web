import hyRequest from '@/service'

// 获取文章列表数据
export const getArticleData = (limit: number, offset: number) => {
  return hyRequest.get({
    url: `/article`,
    params: {
      limit,
      offset
    }
  })
}
