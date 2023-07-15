import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { THEME_MODE } from '@/global/constants'
import { getRecordListData, getUserInfoData } from '@/service/module/main/main'

interface ImainState {
  themeMode: string
  currentColor: string
  recordData: any[]
  authData: any
}

const initialState: ImainState = {
  themeMode: localStorage.getItem(THEME_MODE) || 'moon',
  currentColor: '',
  recordData: [],
  authData: {}
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
    changeRecordDataAction(state, { payload }) {
      state.recordData = payload
    },
    changeAuthDataAction(state, { payload }) {
      state.authData = payload
    }
  }
})

export const {
  changeThemeColorAction,
  changeThemeModeAction,
  changeRecordDataAction,
  changeAuthDataAction
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

// 获取记录的数据
export const fetchRecordDataAction = createAsyncThunk('recordData', async (arg, { dispatch }) => {
  const res = await getRecordListData()
  dispatch(changeRecordDataAction(res.data))
})

// 获取我的信息
export const fetchAuthDataAction = createAsyncThunk('authInfo', async (arg, { dispatch }) => {
  const res = await getUserInfoData()
  dispatch(changeAuthDataAction(res.data))
})
