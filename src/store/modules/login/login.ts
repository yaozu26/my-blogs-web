import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IAccount } from '@/types'
import { accountLoginRequest } from '@/service/module/login'
import { IS_AUTO_LOGIN, LOGIN_TOKEN, USERNAME } from '@/global/constants'

interface ILoginState {
  token: string
  isAutoLogin: boolean
  userName: string
}

const initialState: ILoginState = {
  token: localStorage.getItem(LOGIN_TOKEN) || '',
  isAutoLogin: !!localStorage.getItem(IS_AUTO_LOGIN) || false,
  userName: localStorage.getItem(USERNAME) || ''
}

const loginSlicer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeTokenAction(state, { payload }) {
      state.token = payload
    },
    changeAutoLoginAction(state, { payload }) {
      state.isAutoLogin = payload
    },
    changeUsernameAction(state, { payload }) {
      state.userName = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoginAction.fulfilled, (state, { payload }) => {
      // 1、拿到token
      const token = payload?.data.token
      const name = payload?.data.name
      if (token) {
        state.token = token
        state.userName = name

        // 2、确认是否保存token到本地存储
        if (state.isAutoLogin) {
          localStorage.setItem(LOGIN_TOKEN, token)
          localStorage.setItem(USERNAME, name)
        } else {
          localStorage.removeItem(LOGIN_TOKEN)
          localStorage.removeItem(USERNAME)
        }

        // 3、路由跳转回上一级
        history.back()
      }
    })
  }
})

export const { changeTokenAction, changeAutoLoginAction, changeUsernameAction } =
  loginSlicer.actions
export default loginSlicer.reducer

// 用户登录
export const fetchLoginAction = createAsyncThunk('account-login', async (account: IAccount) => {
  // 1、帐号登录，获取token信息
  const res = await accountLoginRequest(account)
  return res
})

// 退出登录
export const fetchExitLoginAction = createAsyncThunk('exit-login', async (arg, { dispatch }) => {
  // 1、清除store中的token和用户等信息
  dispatch(changeTokenAction(''))
  dispatch(changeUsernameAction(''))

  // 2、清除本地存储的token和用户信息
  localStorage.removeItem(LOGIN_TOKEN)
  localStorage.removeItem(USERNAME)
})
