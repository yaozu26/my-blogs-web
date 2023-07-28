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

// 查询文章详情
export const getArticleDetailData = (id: number) => {
  return hyRequest.get({
    url: `/article/${id}`
  })
}
