import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getProjectDetail } from '@/service/module/project'
import { IProjectDetail } from '@/types'

interface IProjectState {
  projctDetailData: IProjectDetail | any
}

const initialState: IProjectState = {
  projctDetailData: {}
}

const projectSlicer = createSlice({
  name: 'project',
  initialState,
  reducers: {
    changeProjectDetailAction(state, { payload }) {
      state.projctDetailData = payload
    }
  }
})

export const { changeProjectDetailAction } = projectSlicer.actions
export default projectSlicer.reducer

// 获取项目详情数据
export const fetchProjectDetailAction = createAsyncThunk(
  'projectDetail',
  async (arg: number, { dispatch }) => {
    const res = await getProjectDetail(arg)
    dispatch(changeProjectDetailAction(res.data))
  }
)
