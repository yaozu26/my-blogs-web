import { getArticleDetailData, postCommentRequest } from '@/service/module/main/blogs'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IArtilceDetail } from '@/types'
import { getCommentsList } from '@/service/module/main/blogs'

interface IArticleSatae {
  articleDetailData: IArtilceDetail | any
  commentsDataList: any[]
}

const initialState: IArticleSatae = {
  articleDetailData: {},
  commentsDataList: []
}

const articleSlicer = createSlice({
  name: 'article',
  initialState,
  reducers: {
    changeArticleDetailAction(state, { payload }) {
      state.articleDetailData = payload
    },
    changeCommentsDataAction(state, { payload }) {
      state.commentsDataList = payload
    }
  }
})

export const { changeArticleDetailAction, changeCommentsDataAction } = articleSlicer.actions
export default articleSlicer.reducer

// 获取文章详情数据
export const fetchArticleDetailAction = createAsyncThunk(
  'articleDetail',
  async (arg: number, { dispatch }) => {
    const res = await getArticleDetailData(arg)
    dispatch(changeArticleDetailAction(res.data))
  }
)

// 发表评论
interface IArg {
  content: string
  articleId: number
  commentId: number | null
}
export const fetchCreateCommentAction = createAsyncThunk('createComent', async (arg: IArg) => {
  const { content, articleId, commentId } = arg
  await postCommentRequest(content, articleId, commentId)
})

// 查询评论列表
export const fetchCommentsDataAction = createAsyncThunk(
  'commentsData',
  async (arg, { dispatch }) => {
    const res = await getCommentsList()
    dispatch(changeCommentsDataAction(res.data))
  }
)
