import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getProjectData } from '@/service/module/main/home'

interface IHomeState {
  projectData: any[]
}

const initialState: IHomeState = {
  projectData: []
}

const homeSlicer = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeProjectDataAction(state, { payload }) {
      state.projectData = payload
    }
  }
})

export const { changeProjectDataAction } = homeSlicer.actions
export default homeSlicer.reducer

// 获取项目信息
export const fetchProjectDataAction = createAsyncThunk('projectData', async (arg, { dispatch }) => {
  const res = await getProjectData()
  dispatch(changeProjectDataAction(res.data))
})
