import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchThemeColorAction, fetchThemeModeAction } from '@/store/modules/main/main'
import AppHeader from './components/app-header'
// import WebBg from '@/views/web-bg'

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
      <div className="page" style={{ marginTop: '60px' }}>
        <Suspense fallback="">
          <div className="main">{useRoutes(routes)}</div>
        </Suspense>
      </div>
    </div>
  )
}

export default App
