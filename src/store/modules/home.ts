import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getProjectData, getThemeData } from '@/service/module/home'

interface IHomeState {
  themeListData: any[]
  projectListData: any[]
}

const initialState: IHomeState = {
  themeListData: [],
  projectListData: []
}

const homeSlicer = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeProjectDataAction(state, { payload }) {
      state.projectListData = payload
    },
    changeThemeDataAction(state, { payload }) {
      state.themeListData = payload
    }
  }
})

export const { changeProjectDataAction, changeThemeDataAction } = homeSlicer.actions
export default homeSlicer.reducer

// 获取项目列表信息
export const fetchProjectDataAction = createAsyncThunk('projectData', async (arg, { dispatch }) => {
  const res = await getProjectData()
  dispatch(changeProjectDataAction(res.data))
})

// 获取theme列表信息
export const fetchThemeDataAction = createAsyncThunk('themeData', async (arg, { dispatch }) => {
  const res = await getThemeData()
  dispatch(changeThemeDataAction(res.data))
})
