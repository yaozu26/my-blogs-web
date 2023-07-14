import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, shallowEqual, useDispatch, useSelector } from 'react-redux'

import mainSlicer from './modules/main/main'
import loginSlicer from './modules/login/login'

const store = configureStore({
  reducer: {
    main: mainSlicer,
    login: loginSlicer
  }
})

// 获取state和dispatch的类型
export type GetStateType = typeof store.getState
export type IRootState = ReturnType<GetStateType>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export { shallowEqual }
export default store
