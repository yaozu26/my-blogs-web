import React, { useEffect } from 'react'

import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchThemeColorAction, fetchThemeModeAction } from '@/store/modules/main/main'
// import WebBg from '@/views/web-bg'
import AppHeader from './components/app-header'
import Main from '@/views/main'

function App() {
  // 根据isSun值确定主题，派发事件
  const { themeMode } = useAppSelector(
    (state) => ({
      themeMode: state.main.themeMode
    }),
    shallowEqual
  )

  // 派发事件
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchThemeModeAction(themeMode))
    dispatch(fetchThemeColorAction())
  }, [])

  return (
    <div className="App">
      {/* <WebBg /> */}
      <AppHeader />
      <Main />
    </div>
  )
}

export default App
