import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  getProductDetail,
  postProductRequest,
  updateProductData
} from '@/service/module/user/product'

interface IWriteState {
  title: string
  content: any
  labels: any[]
  theme: string
}

const initialState: IWriteState = {
  title: '',
  content: '',
  labels: [],
  theme: ''
}

const writeSlicer = createSlice({
  name: 'write',
  initialState,
  reducers: {
    changeTitleAction(state, { payload }) {
      state.title = payload
    },
    changeContentAction(state, { payload }) {
      state.content = payload
    },
    changeLabelsAction(state, { payload }) {
      state.labels = payload
    },
    changeThemeAction(state, { payload }) {
      state.theme = payload
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchIssueProductAction.pending, (state) => {
      postProductRequest(state.title, state.theme, state.labels, state.content).then((res) => {
        console.log(res)
      })
    })

    builder.addCase(fetchUpdateProductAction.fulfilled, (state, { payload }) => {
      updateProductData(payload, state.title, state.theme, state.labels, state.content).then(
        (res) => {
          console.log(res)
        }
      )
    })
  }
})

export const { changeTitleAction, changeContentAction, changeLabelsAction, changeThemeAction } =
  writeSlicer.actions
export default writeSlicer.reducer

// 发布项目
export const fetchIssueProductAction = createAsyncThunk('issueProduct', (arg, { dispatch }) => {
  dispatch(changeTitleAction(''))
  dispatch(changeContentAction(''))
  dispatch(changeLabelsAction([]))
  dispatch(changeThemeAction(''))
})

// 更新项目
export const fetchUpdateProductAction = createAsyncThunk('updateProduct', (arg: string) => {
  return arg
})

// 清空数据
export const fetchClearDataAction = createAsyncThunk('clearData', async (arg, { dispatch }) => {
  dispatch(changeTitleAction(''))
  dispatch(changeContentAction(''))
  dispatch(changeLabelsAction([]))
  dispatch(changeThemeAction(''))
})

// 获取项目信息
export const fetchProductDetailAction = createAsyncThunk(
  'productDetail',
  async (arg: number, { dispatch }) => {
    const res = await getProductDetail(arg)
    dispatch(changeTitleAction(res.data.title))
    dispatch(changeContentAction(res.data.content))
    const labels = res.data.labels.map((item: { name: any }) => item.name)
    dispatch(changeLabelsAction(labels))
    dispatch(changeThemeAction(res.data.theme))
  }
)
