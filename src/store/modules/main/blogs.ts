import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getArticleData } from '@/service/module/main/blogs'
import type { ILim } from '@/types'

interface IBlogsState {
  articleListData: any[]
  totalCount: number
}

const initialState: IBlogsState = {
  articleListData: [],
  totalCount: 0
}

const blogsSlicer = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    changeArticleListAction(state, { payload }) {
      state.articleListData = payload
    },
    changeTotalCOuntAction(state, { payload }) {
      state.totalCount = payload
    }
  }
})

export const { changeArticleListAction, changeTotalCOuntAction } = blogsSlicer.actions
export default blogsSlicer.reducer

// 获取文章列表数据
export const fetchArticleListAction = createAsyncThunk(
  'articleList',
  async (arg: ILim, { dispatch }) => {
    const res: any = await getArticleData(arg.limit, arg.offset)
    dispatch(changeArticleListAction(res.data))
    dispatch(changeTotalCOuntAction(res.totalCount))
  }
)
