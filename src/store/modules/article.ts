import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { IArtilceDetail } from '@/types'
import {
  deleteCommentRequest,
  getArticleDetailData,
  postCommentRequest,
  getCommentsList
} from '@/service/module/blogs'

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
    dispatch(fetchCommentsDataAction(arg))
  }
)

// 获取评论列表数据
export const fetchCommentsDataAction = createAsyncThunk(
  'commentsData',
  async (arg: number, { dispatch }) => {
    const res = await getCommentsList(arg)
    dispatch(changeCommentsDataAction(res.data))
  }
)

// 发表评论
export const fetchCreateCommentAction = createAsyncThunk(
  'createComment',
  async (arg: any, { dispatch }) => {
    const { content, articleId, commentId, parentId } = arg
    const res = await postCommentRequest(content, articleId, commentId, parentId)
    console.log(res)
    dispatch(fetchCommentsDataAction(articleId))
  }
)

// 删除评论
export const fetchDeleteCommentAction = createAsyncThunk(
  'deleteComment',
  async (arg: any, { dispatch }) => {
    await deleteCommentRequest(arg.id)
    dispatch(fetchCommentsDataAction(arg.articleId))
  }
)
