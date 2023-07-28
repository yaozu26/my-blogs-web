import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, shallowEqual, useDispatch, useSelector } from 'react-redux'

import mainSlicer from './modules/main'
import homeSlicer from './modules/main/home'
import blogsSlicer from './modules/main/blogs'
import loginSlicer from './modules/login'
import projectSlicer from './modules/project'
import articleSlicer from './modules/article'

const store = configureStore({
  reducer: {
    main: mainSlicer,
    login: loginSlicer,
    home: homeSlicer,
    blogs: blogsSlicer,
    project: projectSlicer,
    article: articleSlicer
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
