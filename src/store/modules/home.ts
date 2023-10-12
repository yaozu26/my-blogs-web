import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getProjectData } from '@/service/module/home'

interface IHomeState {
  projectListData: any[]
}

const initialState: IHomeState = {
  projectListData: []
}

const homeSlicer = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeProjectDataAction(state, { payload }) {
      state.projectListData = payload
    }
  }
})

export const { changeProjectDataAction } = homeSlicer.actions
export default homeSlicer.reducer

// 获取项目列表信息
export const fetchProjectDataAction = createAsyncThunk('projectData', async (arg, { dispatch }) => {
  const res = await getProjectData()
  dispatch(changeProjectDataAction(res.data))
})
