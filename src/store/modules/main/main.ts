import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface ImainState {
  themeMode: string
  currentColor: string
}

const initialState: ImainState = {
  themeMode: 'moon',
  currentColor: ''
}

const mainSlicer = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeThemeModeAction(state, { payload }) {
      state.themeMode = payload
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
