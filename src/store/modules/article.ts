import { getArticleDetailData } from '@/service/module/main/blogs'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IArtilceDetail } from '@/types'

interface IArticleSatae {
  articleDetailData: IArtilceDetail | any
}

const initialState: IArticleSatae = {
  articleDetailData: {}
}

const articleSlicer = createSlice({
  name: 'article',
  initialState,
  reducers: {
    changeArticleDetailAction(state, { payload }) {
      state.articleDetailData = payload
    }
  }
})

export const { changeArticleDetailAction } = articleSlicer.actions
export default articleSlicer.reducer

// 获取文章详情数据
export const fetchArticleDetailAction = createAsyncThunk(
  'articleDetail',
  async (arg: number, { dispatch }) => {
    const res = await getArticleDetailData(arg)
    dispatch(changeArticleDetailAction(res.data))
  }
)
