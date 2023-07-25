import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getLabelListData, getUserInfoData } from '@/service/module/main'

interface ImainState {
  authData: any
  labelListData: any[]
}
const initialState: ImainState = {
  authData: {},
  labelListData: []
}

const mainSlicer = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeAuthDataAction(state, { payload }) {
      state.authData = payload
    },
    changeLabelListAction(state, { payload }) {
      state.labelListData = payload
    }
  }
})

export const { changeAuthDataAction, changeLabelListAction } = mainSlicer.actions
export default mainSlicer.reducer

// 获取我的信息
export const fetchAuthDataAction = createAsyncThunk('authInfo', async (arg, { dispatch }) => {
  const res = await getUserInfoData()
  dispatch(changeAuthDataAction(res.data))
})

// 获取所有标签信息
export const fetchLabelListAction = createAsyncThunk('labelList', async (arg, { dispatch }) => {
  const res = await getLabelListData()
  dispatch(changeLabelListAction(res.data))
})
