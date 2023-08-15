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

// 发表评论
export const postCommentRequest = (
  content: string,
  articleId: number,
  commentId: number | null
) => {
  return hyRequest.post({
    url: '/comment',
    data: {
      content,
      articleId,
      commentId
    }
  })
}

// 查询评论
export const getCommentsList = () => {
  return hyRequest.get({
    url: '/comment'
  })
}
