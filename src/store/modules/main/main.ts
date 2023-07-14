import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { THEME_MODE } from '@/global/constants'

interface ImainState {
  themeMode: string
  currentColor: string
}

const initialState: ImainState = {
  themeMode: localStorage.getItem(THEME_MODE) || 'moon',
  currentColor: ''
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
    }
  }
})

export const { changeThemeColorAction, changeThemeModeAction } = mainSlicer.actions
export default mainSlicer.reducer

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

export const fetchThemeColorAction = createAsyncThunk('themeColor', (arg, { dispatch }) => {
  const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-color')
  dispatch(changeThemeColorAction(currentColor))
})
