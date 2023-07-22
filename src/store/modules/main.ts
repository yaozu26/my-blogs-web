import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { THEME_MODE } from '@/global/constants'
import { getLabelListData, getUserInfoData } from '@/service/module/main'

interface ImainState {
  themeMode: string
  currentColor: string
  authData: any
  labelListData: any[]
}
const initialState: ImainState = {
  themeMode: localStorage.getItem(THEME_MODE) || 'moon',
  currentColor: '',
  authData: {},
  labelListData: []
}

const mainSlicer = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeThemeModeAction(state, { payload }) {
      state.themeMode = payload
      localStorage.setItem(THEME_MODE, payload)
    },
    changeThemeColorAction(state, { payload }) {
      state.currentColor = payload
    },
    changeAuthDataAction(state, { payload }) {
      state.authData = payload
    },
    changeLabelListAction(state, { payload }) {
      state.labelListData = payload
    }
  }
})

export const {
  changeThemeColorAction,
  changeThemeModeAction,
  changeAuthDataAction,
  changeLabelListAction
} = mainSlicer.actions
export default mainSlicer.reducer

// 改变主题样式
export const fetchThemeModeAction = createAsyncThunk('themeMode', (arg: string) => {
  switch (arg) {
    case 'sun ':
      document.documentElement.removeAttribute('class')
      break
    case 'moon':
      document.documentElement.setAttribute('class', 'dark')
      break
  }
})

// 改变当前颜色
export const fetchThemeColorAction = createAsyncThunk('themeColor', (arg, { dispatch }) => {
  const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-color')
  dispatch(changeThemeColorAction(currentColor))
})

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
