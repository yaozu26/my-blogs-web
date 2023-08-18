import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IAccount } from '@/types'
import { accountLoginRequest } from '@/service/module/login'
import { IS_AUTO_LOGIN, LOGIN_TOKEN, USER_ID, USER_NAME } from '@/global/constants'

interface ILoginState {
  username: string
  token: string
  id: number
  isAutoLogin: boolean
}

const initialState: ILoginState = {
  token: localStorage.getItem(LOGIN_TOKEN) || '',
  username: localStorage.getItem(USER_NAME) || '',
  id: Number(localStorage.getItem(USER_ID)) || 0,
  isAutoLogin: !!localStorage.getItem(IS_AUTO_LOGIN) || true
}

const loginSlicer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeUserInfoAction(state, { payload }) {
      state.username = payload.name
      state.token = payload.token
      state.id = payload.id
    },
    changeAutoLoginAction(state, { payload }) {
      state.isAutoLogin = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoginAction.fulfilled, (state, { payload }) => {
      // 1、获取用户信息
      state.username = payload.name
      state.token = payload.token
      state.id = payload.id

      // 2、确认是否保存token到本地存储
      if (state.isAutoLogin) {
        localStorage.setItem(LOGIN_TOKEN, payload.token)
        localStorage.setItem(USER_NAME, payload.name)
        localStorage.setItem(USER_ID, payload.id)
      } else {
        localStorage.removeItem(LOGIN_TOKEN)
        localStorage.removeItem(USER_NAME)
        localStorage.removeItem(USER_ID)
      }

      // 3、路由跳转回上一级
      history.back()
    })
  }
})

export const { changeAutoLoginAction, changeUserInfoAction } = loginSlicer.actions
export default loginSlicer.reducer

// 帐号密码登录
export const fetchLoginAction = createAsyncThunk('account-login', async (account: IAccount) => {
  const res = await accountLoginRequest(account)
  return res.data
})

// 退出登录
export const fetchExitLoginAction = createAsyncThunk('exit-login', async (arg, { dispatch }) => {
  // 1、清除store中的用户等信息
  dispatch(changeUserInfoAction(''))

  // 2、清除本地存储的用户信息
  localStorage.removeItem(LOGIN_TOKEN)
  localStorage.removeItem(USER_NAME)
  localStorage.removeItem(USER_ID)
})
